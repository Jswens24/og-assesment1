/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition = 'Git is a version control system';

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = 'GitHub is a place to externally store your repositories'

//////////////////PROBLEMS 3 - 9////////////////////
/*
    For the next several problems you will be creating objects containing information about different git
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property
    will be a string with a description of what that git command does.  The 'code' property should be a
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties
    following the guidelines above to describe the init command.
*/

const init = {
    'description': 'starts tracking versions of your project',
    'code': 'git init'
}

//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties
    following the guidelines above to describe the clone command.
*/

const clone = {
    'description': 'copies an existing project',
    'code': 'git clone https://someproject.com'
}

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties
    following the guidelines above to describe the status command.
*/

const status = {
    'description': 'tells you what branch you are working in and the status of your files',
    'code': 'git status'
}

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties
    following the guidelines above to describe the add command.
*/

const add = {
    'description': 'adds files that have changes to queue for next commit',
    'code': 'git add .'
}

//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

const commit = {
    'description': 'creates a snapshot of the files that are being tracked',
    'code': "git commit -m 'what i updated' "
}

//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'addRemote' with 'description' and 'code' properties
    following the guidelines above to describe the command to add a remote location to your git repository.
*/

const addRemote = {
    'description': 'the adds your git repo and an external location',
    'code': 'git remote add origin https://github.com/Jswens24/og-assesment132.git'
}

//////////////////PROBLEM 9////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties
    following the guidelines above to describe the push command.
*/

const push = {
    'description': 'brings last commit to remote repo',
    'code': 'git push'
}