sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes a new note in the text field and clicks "Save"
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note { "content": "New note", "date": "2025-01-14" }
    activate server
    server-->>browser: 302 Redirect to /exampleapp/notes
    deactivate server

    Note right of browser: The browser follows the redirect and reloads the notes page
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

    Note right of browser: The browser executes JavaScript to fetch the latest notes
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, { "content": "New note", "date": "2025-01-14" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function to render the updated notes
