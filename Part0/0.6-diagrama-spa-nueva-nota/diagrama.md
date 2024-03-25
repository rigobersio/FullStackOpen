sequenceDiagram
    participant browser
    participant server
    participant database
    participant spa

    browser->>spa: User interacts with SPA
    activate spa
    spa->>browser: User writes a new note
    deactivate spa

    Note right of browser: User writes a note and clicks Save button

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server-->>database: Add new note to database
    activate database
    database-->>server: Confirmation
    deactivate database
    server-->>browser: Success response
    deactivate server

    Note right of browser: SPA updates the UI to reflect the new note
