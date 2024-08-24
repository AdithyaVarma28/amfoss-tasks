# Terminal Chaos
Chaos is taking over, and the heretics are emerging. The Emperor calls for aid, and our fellow space marine has been stranded on the desolate planet Arrakis-dex. With nothing but a handbook and an imperial plasma gun in hand but the courage and the strength of an astarte, survive the hostile yet lifeless prison. GLORY TO THE EMPEROR!<hr>
This task aims to familiarise you with basic **terminal and git commands** in a fun and interactive way. You can refer to the following [resource](https://linuxjourney.com/lesson/the-shell) for a primer on terminal commands. We expect you to find the rest yourself via googling, good luck :)

Clone this repository to your local system using `git clone`. Create a 'Handbook' directory on your system. Make sure to store all the codes for weapons, artifacts and keys that you will find as part of this task as text files to your **Handbook** directory using `nano` or any of your favourite text-editor. Push the changes to your repository “amfoss-tasks” after every part, i.e. after every new code you acquire.<br><br>
You can now get started with this task, by entering Arrakis-dex using the command `cd Terminal-Chaos/Arrakis-dex`
## Part 1
Check your surroundings using the command `ls`. A deadly sandstorm - *Vortex of Desolation*, is impending. Use the comand `cd <path of directory>` to get to safety before it catches up! <br>*(preferably somewhere where you have a roof over your head)*<br><br>
The Eolian Caves are dark indeed. You sense a breeze coming from a hidden tunnel. Light up the room using a more powerful `ls` command. Explore the mysterious cave to find the **parchment** that will lead you to your destiny.<br>
**Hint**: If you're confused on where to go to find something, make use of the `tree` or `find` command for guidance.

Get the hidden code from the parchment using the `cat` command and store it in the Handbook.

If you're unable to read the contents of the parchment, you might need to activate (or run) the ancient **medallion**

## Part 2
You have got a promising lead. The secrets of the sealed realms are slowly coming to light.<br>
Use `git checkout <branch name>` to switch between the realms, overriding the seals. Explore the **light realm** and be on the lookout for collectibles and ciphers in various chambers. BEWARE of hostile flora, fauna and potential dungeon Bosses. 
### Kharnok the Bloodforged
Kharnok the Bloodforged, a malevolent entity shrouded in the icy depths of Arrakis-Dex, emerged from the unholy fusion of ancient chaos rituals and the raw power of the Warp. Kharnok’s symbiotic relationship with his weapon, Bloodreign, is his strength and weakness. Timing the parries to disarm the boss and using holy magic to cleanse the corruption is an effective strategy indeed.<br>

#### How to brew a holy spell
1) Use `grep` to find the filenames of herbs which have both **“holy"** and **"good”** inside their content.
2) Join all found herb names together. The one which has 'oo' in it's name should be the first.
3) Replace each letter in this combination with the letter that comes before it.
4) Remove all vowels from the final code and voila, you have made yourself a holy spell.

#### Celestial Veil Amulet
Forged in the celestial forges of Sigmaron, the Celestial Veil Amulet is a relic born of divine intervention to combat the malevolent forces that threaten the balance of existence. When worn, the Celestial Veil Amulet emanates a radiant glow, warding off malevolent influences and shielding the bearer from the corrupting touch of the Chaos.<br>
Dropped by Khanrock the Bloodforged. Use the Celestial Veil Amulet to unlock chests in the Dark Branch. 

## Part 3
The first part of the book (Light Book) has been acquired. The **Dark realm(branch)** awaits you. The air is thick with the noxious fumes of corruption, and the ground beneath is stained with the ichor of the damned. And here, beyond the ominous shadows and malevolent forces, lies the gateway to the second half of the scriptures…<br>
<br>
It seems the chaos has ripped apart space time itself of the Dark Realm splitting it into two. Traversing through these unforgiving environments might be impossible, but the Celestial Veil serves as the beacon for the lost Astarte.
Use the **Celestial Veil Amulet** to unlock the chests found in branches *Dark Realm I* and *II*.

## Part 4

Now, in possession of both halves of the corrupted book, the time has come to unite the separated halves to forge a union that transcends the fractured abyss. Gather and combine the four codes you have acquired from each part and [decode](https://www.cyberciti.biz/faq/decode-base64-string-in-linux-unix-with-base64-command/) it to get the link to the GodSuite repository. Clone this repo to continue with the next part of the task.

## Part 5: Welcome to GodSuite
As the beacon of hope resurrects to its true glory, the **GodSuite** branch is born. The book represents the young boy himself. **Each commit**, a distinct chapter, encapsulating the trials, growth, and eventual transcendence.

**Check through all commits** and observe the changes, you might just find the **secret code** capable of altering your fate. You can attempt to decode this code yourself or use the divine machine whose coordinates are hidden within.
<hr>
After finishing all the tasks, it's mandatory to make a writeup explaining how you did each part in detail.

`Some Tasks might have multiple methods of solving. Any method involving the use of terminal is accepted`


