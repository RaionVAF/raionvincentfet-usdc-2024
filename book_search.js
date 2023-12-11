/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */
    var result = {
        "SearchTerm": "",
        "Results": []
    };
    
    // Put in desired search term in result
    result.SearchTerm = searchTerm
    // Begin seach through JSON obj
    for (i in scannedTextObj) {
        var book = scannedTextObj[i]
        var bookContent = scannedTextObj[i].Content
        
        for (j in bookContent) {
            var contentSection = bookContent[j]
            
            // If the content section contains search term, create JSON
            // object and add it to the results list
            if (contentSection.Text.includes(searchTerm)) {
                result.Results.push({
                    "ISBN": book.ISBN,
                    "Page": contentSection.Page,
                    "Line": contentSection.Line
                })
            }
        }
    }

    return result; 
}

/** Example input object 1 */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]

/** Example output object 1 */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/** Example input object 2 */
const greenEggsAndHamIn = [
    {
        "Title": "Green Eggs and Ham",
        "ISBN": "9780007355914",
        "Content": [
            {
                "Page": 6,
                "Line": 1,
                "Text": "Do you like"
            },
            {
                "Page": 7,
                "Line": 3,
                "Text": "I do not like"
            }
        ] 
    }
]

/** Example output object 2 */
const emptyOut = {
    "SearchTerm": "word",
    "Results": []
}

/** Example input object 3 */
const emptyIn = {}

/** Example output object 3 */
const emptyContentsOut = {
    "SearchTerm": "word",
    "Results": []
}

/** Example input object 4 */
const emptyContentsIn = {
    "Title": "Green Eggs and Ham",
    "ISBN": "9780007355914",
    "Content": []
}

/** Example output object 4 */
const greenEggsAndHamOut1 = {
    "SearchTerm": "Do",
    "Results": [
        {
            "ISBN": "9780007355914",
            "Page": 6,
            "Line": 1
        }
    ]
}

/** Example output object 5 */
const greenEggsAndHamOut2 = {
    "SearchTerm": "worm",
    "Results": []
}

/** Example output object 6 */
const greenEggsAndHamOut3 = {
    "SearchTerm": "",
    "Results": [
        {
            "ISBN": "9780007355914",
            "Page": 6,
            "Line": 1
        },
        {
            "ISBN": "9780007355914",
            "Page": 7,
            "Line": 3
        }
    ]
}

/** Example input object 5 */
const libraryIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    },
    {
        "Title": "Green Eggs and Ham",
        "ISBN": "9780007355914",
        "Content": [
            {
                "Page": 6,
                "Line": 1,
                "Text": "Do you like"
            },
            {
                "Page": 7,
                "Line": 3,
                "Text": "I do not like"
            }
        ] 
    }
]

/** Example output object 7 */
const libraryOut1 = {
    "SearchTerm": "I",
    "Results": [
        {   
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        },
        {
            "ISBN": "9780007355914",
            "Page": 7,
            "Line": 3
        }
    ]
}

/** Example output object 8 */
const libraryOut2 = {
    "SearchTerm": "Something",
    "Results": []
}

/** Example output object 9 */
const libraryOut3 = {
    "SearchTerm": "",
    "Results": [
        {   
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 8
        },
        {   
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {   
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        },
        {
            "ISBN": "9780007355914",
            "Page": 6,
            "Line": 1
        },
        {
            "ISBN": "9780007355914",
            "Page": 7,
            "Line": 3
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** Testing empty JSON - Test should return empty results */
const test3result = findSearchTermInBooks("word", emptyIn);
if (JSON.stringify(emptyOut) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", emptyOut);
    console.log("Received:", test3result);
}

/** Testing empty Content field - Test should return empty results */
const test4result = findSearchTermInBooks("word", emptyContentsIn);
if (JSON.stringify(emptyContentsOut) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", emptyContentsOut);
    console.log("Received:", test4result);
}

/** Testing One Book - Test matching with "Do" and not "do" */
const test5result = findSearchTermInBooks("Do", greenEggsAndHamIn);
if (JSON.stringify(greenEggsAndHamOut1) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", greenEggsAndHamOut1);
    console.log("Received:", test5result);
}

/** Testing One Book - Test that it doesnt return a match */
const test6result = findSearchTermInBooks("worm", greenEggsAndHamIn);
if (JSON.stringify(greenEggsAndHamOut2) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", greenEggsAndHamOut2);
    console.log("Received:", test6result);
}

/** Testing One Book - Empty string search term, should match all content */
const test7result = findSearchTermInBooks("", greenEggsAndHamIn);
if (JSON.stringify(greenEggsAndHamOut3) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", greenEggsAndHamOut3);
    console.log("Received:", test7result);
}

/** Testing Two Books - Test matching with "I" */
const test8result = findSearchTermInBooks("I", libraryIn);
if (JSON.stringify(libraryOut1) === JSON.stringify(test8result)) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", libraryOut1);
    console.log("Received:", test8result);
}

/** Testing Two Books - No match */
const test9result = findSearchTermInBooks("Something", libraryIn);
if (JSON.stringify(libraryOut2) === JSON.stringify(test9result)) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", libraryOut2);
    console.log("Received:", test9result);
}

/** Testing Two Books - Test matching with "", should match all content */
const test10result = findSearchTermInBooks("", libraryIn);
if (JSON.stringify(libraryOut3) === JSON.stringify(test10result)) {
    console.log("PASS: Test 10");
} else {
    console.log("FAIL: Test 10");
    console.log("Expected:", libraryOut3);
    console.log("Received:", test10result);
}