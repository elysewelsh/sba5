Bob Loblaw's Law Blog
_____________________________________________________________________
Description

This project is a dynamic, client-side blogging application that allows users to write, archive, and manage personal blog posts. It features a clean submission interface with real-time validation to ensure no empty "law bombs" are dropped.

The application provides full CRUD (Create, Read, Update, Delete) functionality:

    Create: Submit new posts with a title and content.

    Read: View a chronological list of past posts with formatted dates.

    Update: Edit existing posts by sending their data back to the input form for revision.

    Delete: Remove posts from the archive instantly.

To ensure your thoughts aren't lost when the browser closes, the project utilizes Web Storage (localStorage) to persist your data across sessions.

_____________________________________________________________________
DEVELOPMENT PROCESS

I started with the HTML structure. I outlined all the static elements and gave the dynamic Past Posts section its own area to create elements into.

I then started getting all of the HTML elements organized into the JavaScript file. The required declaring variables.

I then started writing the functions in JavaScript. Storing the array, rendering the array, event listeners for every button, custom validation on both input fields, and some additional dynamic content for headers to show if necessary.
_____________________________________________________________________
CHALLENGES

It all seemed pretty straight-forward. I felt well-prepared for the challenges and there weren't many. Looking at my commit history, adding title, content, and deleting functionality took the most time at 2.5 hours. It didn't feel like it took that long because I was constantly typing and trying to work through it. Persistence was the key. I feel like the timestamp and date should have taken the longest because I had a lot of trial and error figuring out the correct format to store and display. The CSS was also a struggle, but I think only because I thought it was going to be easier than it was, so I saved it for last and was burnt out.

I had to research how to update styles using JavaScript to show or hide the Past Posts header and I also went outside of class resources to get some style inspiration.

_____________________________________________________________________
KNOWN ISSUES AND FEATURES NOT IMPLEMENTED

I don't think there are any issues. Before completing the README, I added an alert to let the user know the post was submitted because it felt like an odd experience without it. 

I don't love that the page doesn't return to the top of the screen/to the form when you press edit from a past post at the very bottom, but I'm currently researching how to fix that and found window.scrollTo({ top: 0, behavior: 'smooth' });. And I added it, so I think it's pretty much exactly how I want it.

I used getElementById and not querySelector/querySelectorAll. I know how to use them and that the difference between them is that querySelector will return the FIRST instance of the search term, but querySelectorAll will return ALL the instances of the search term. However, I also read (while doing the other discussion questions) that using getElementById is a better practice because it doesn't take up as much compute and it's easier to maintain, so I chose getElementById. 

I reached out to Jade and Quinn to see how big of a deal this is because the rubric says "Efficiently & correctly uses querySelector/querySelectorAll; correctly creates & appends new DOM elements.", but I don't expect to hear back before I submit. I'll accept any penalty, but would like to understand why we're using one over the other.