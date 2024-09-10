# Documentation for Password Generator

## Overview
The Password Generator application creates random passwords based on user defined criteria. It allows users to select which types of characters to include in their passwords and provides options to check password strength.

## Functionality

### Models

#### Password

- **`Password(String s)`**
  - Initializes a new password instance with the specified value.
- **`CharType(char C)`**
  - Determines the type of character(uppercase, lowercase, digit, symbol) and returns a corresponding integer.
- **`PasswordStrength()`**
  - Calculates the strength of the password based on character types used and length.
- **`calculateScore()`**
  - Provides feedback on the password strength based on the calculated score.

### Views

#### Generator

- **`mainLoop()`**
  - Displays the main menu and handles user selections.
- **`GeneratePassword(length)`**
  - Generates a random password of the specified length using selected character types.
- **`checkPassword()`**
  - Prompts for a password and evaluates its strength.
- **`printUsefulInfo()`**
  - Displays guidelines and tips for creating strong passwords.
- **`requestPassword()`**
  - Collects user preferences for password criteria and generates a password based on those preferences.

## Implementation Details

### Password Generation
Passwords are generated based on user-selected criteria(uppercase letters, lowercase letters, numbers, symbols). The `Generator` class handles the creation of the password using the `GeneratePassword` method.

### Password Strength Check
The strength of a password is evaluated using the `Password` class. The `checkPassword` method in the `Generator` class assesses the password and provides feedback on its strength.

### Useful Information
The `printUsefulInfo` method provides guidelines for creating strong passwords, including recommendations on length and character variety.

## Code Example
Here’s a snippet from the `Generator.java` file showing how password generation is handled:

```java
private Password GeneratePassword(int length) {
        final StringBuilder pass = new StringBuilder("");

        final int alphabetLength = alphabet.getAlphabet().length();

        int max = alphabetLength - 1;
        int min = 0;
        int range = max - min + 1;

        for (int i = 0; i < length; i++) {
            int index = (int) (Math.random() * range) + min;
            pass.append(alphabet.getAlphabet().charAt(index));
        }

        return new Password(pass.toString());
    }
```