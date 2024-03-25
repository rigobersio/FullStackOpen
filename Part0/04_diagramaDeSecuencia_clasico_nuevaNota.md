sequenceDiagram
    participant browser
    participant server
    participant database

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>database: Add new note to database
    activate database
    database-->>server: Confirmation
    deactivate database
    server-->>browser: Redirect to updated notes page
    deactivate server

    Note right of browser: User writes a note<br/>and clicks Save button

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes (updated)
    activate server
    server-->>browser: Updated HTML document with new note
    deactivate server
