import click
from subs_file_hash_size import hash_size_File_url
import requests
from bs4 import BeautifulSoup
from imdb import IMDb
import os

def get_imdb_id(file):
    try:
        file=file.replace('.mpeg4','')
        parts=file.split('/')
        movie=parts[-1].replace('-',' ')
        imdb=IMDb()
        movies=imdb.search_movie(movie)
        if not movies:
            print(f"No results found for '{movie}'.")
            return None
        imdb_id=movies[0].movieID
        if not imdb_id:
            print(f"IMDb ID not found for '{movie}'.")
            return None
        else:
            print(f"IMDb ID of the movie '{movie}' is tt{imdb_id}.")
            return imdb_id
    except Exception as e:
        print(f"{e}")
        return None

def get_file_hash(file):
    try:
        file_hash,file_size=hash_size_File_url(file)
        print(f"File hash is {file_hash}")
        return file_hash
    except Exception as e:
        print(f"{e}")
        return None

def get_file_size(file):
    try:
        file_hash,file_size=hash_size_File_url(file)
        print(f"File size is {file_size*0.000001:.2f} MB")
        return file_size
    except Exception as e:
        print(f"{e}")
        return None
    
def web_scrapping(imdb_id,movie_hash=False,movie_size=False,language='all'):
    url=f'https://www.opensubtitles.org/en/search/sublanguageid-{language}/imdbid-{imdb_id}'
    if movie_hash:
        url+=f'/moviehash-{movie_hash}'
    if movie_size:
        url+=f'/moviebytesize-{movie_size}'
    print(url)
    try:
        response=requests.get(url)
        response.raise_for_status() 
    except Exception as e:
        print(f"{e}")
    soup=BeautifulSoup(response.text,'html.parser')
    base_url='https://www.opensubtitles.org'
    subtitles=[]
    for a in soup.find_all('a',href=True):
        href=a['href']
        if 'subtitleserve' in href:
            if href.startswith('http'):
                subtitles.append(href)
            else:
                subtitles.append(base_url+href)
    if subtitles:
        print("Subtitles found.")
        return subtitles
    else:
        print("No subtitle links found.")
        return []
    
def download_subtitle(url,output):
    os.makedirs(output,exist_ok=True)
    response=requests.get(url)
    if response.status_code==200:
        filename='subtitles.zip'
        output_path=os.path.join(output,filename)
        with open(output_path,'wb') as file:
            file.write(response.content)
        print(f"File downloaded successfully and saved to {output_path}")
    else:
        print(f"Failed to download file.")

@click.command()
@click.argument('file')
@click.option('-l','--language',default='all',help='Filter subtitles by language.')
@click.option('-o','--output',default='.',help='Specify the output folder for the subtitles.')
@click.option('-s','--file-size',is_flag=False,help='Filter subtitles by movie file size.')
@click.option('-h','--match-by-hash',is_flag=False,help='Match subtitles by movie hash.')
@click.option('-b','--batch-download',is_flag=False,help='Enable batch mode.')
def main(file,language,output,file_size,match_by_hash,batch_download):
    if batch_download:
        directory=file
        if not os.path.isdir(directory):
            print("Specified batch download path is not a directory.")
            return
        for filename in os.listdir(directory):
            if filename.endswith('.mpeg4'):
                file_path=os.path.join(directory,filename)
                process_file(file_path,language,output,file_size,match_by_hash)
    else:
        process_file(file,language,output,file_size,match_by_hash)

def process_file(file,language,output,file_size,match_by_hash):
    imdb_id=get_imdb_id(file)
    movie_size=get_file_size(file)
    movie_hash=get_file_hash(file)
    subtitles=web_scrapping(imdb_id,movie_hash=movie_hash if match_by_hash else None,movie_size=movie_size if file_size else None,language=language)
    if subtitles:
        print("Available subtitles:")
        for index,subtitle in enumerate(subtitles):
            print(f"{index+1}:{subtitle}")
        choice=int(input("Enter the subtitle to download: "))-1
        if 0<=choice<len(subtitles):
            download_subtitle(subtitles[choice],output)
        else:
            print("Invalid choice.")

if __name__=='__main__':
    main()