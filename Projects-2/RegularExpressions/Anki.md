# Using the Test Method
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.

If you want to find the word the in the string The dog chased the cat, you could use the following regular expression: /the/.

JavaScript has multiple ways to use regexes.

One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not

Anki
Apply the regex myRegex on the string myString using the .test() method. 

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 


# Match Literal Strings
In the last challenge, you searched for the word Hello using the regular expression
/Hello/. That regex searched for a literal match of the string Hello. Here's another example searching for a literal match of the string Kevin:

let str = "my name is Kevin.";
llet testRegex = /Kevin/;
testRegex.test(str);

Any other forms of Kevin will not match. For example, the regex /Kevin/ will not match kevin or KEVIN

# Match a Literal String with Different Possibilities
Using regexes like /coding/, you can look for the pattern coding in another string.

This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple patterns using the alternation or OR operator: |

This operator matches patterns either before or after it. For example, if you wanted to match the strings yes or no, the regex you want is /yes|no/.

You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe/.

(((Anki))) Complete the regex petRegex to match the pets dog, cat, bird, or fish.
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; 
let result = petRegex.test(petString);


# Ignore Case While Matching
the flag that ignores case - the i flag. 
You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

(((Anki)))
Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);

# Extract Matches
You can also extract the actual matches you found with the .match() method.

(((Anki))) Apply the .match() method to extract the string coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);


# Find More Than the First Match
So far, you have only been able to extract or search a pattern once.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);

To search or extract a pattern more than once, you can use the global search flag: g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);


# Match Anything with Wildcard Period
/hu./  ---> hug hum




# Match Single Character with Multiple Possibilities
Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";

let bgRegex = /b[aiu]g/;

bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

let vowelRegex = /[aeiou]/ig; 
let result = quoteSample.match(vowelRegex);

# Match Letters of the Alphabet
Inside a character set, you can define a range of characters to match using a hyphen character: -.

For example, to match lowercase letters a through e you would use [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);





# Match Numbers and Letters of the Alphabet
Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

Also, it is possible to combine a range of letters and numbers in a single character set.
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRege);





# Match Single Characters Not Specified
you could also create a set of characters that you do not want to match. These types of character sets are called negated character sets.
To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.

For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.

Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; 
let result = quoteSample.match(myRegex); 


# Match Characters that Occur One or More Times
Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.

You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

# Match Characters that Occur Zero or More Times
There's also an option that matches characters that occur zero or more times.

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);


# Find Characters with Lazy Matching
# Find One or More Criminals in a Hunt
# Match Beginning String Patterns
# Match Ending String Patterns
# Match All Letters and Numbers
# Match Everything But Letters and Numbers
# Match All Numbers
# Match All Non-Numbers
# Restrict Possible Usernames
# Match Whitespace
# Match Non-Whitespace Characters
# Specify Upper and Lower Number of Matches
# Specify Only the Lower Number of Matches
# Specify Exact Number of Matches
# Check for All or None
# Positive and Negative Lookahead
# Check For Mixed Grouping of Characters
# Reuse Patterns Using Capture Groups
# Use Capture Groups to Search and Replace
# Remove Whitespace from Start and End