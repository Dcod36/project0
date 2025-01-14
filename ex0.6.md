``` mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User writes a new note in the text field and clicks "Save"
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa { "content": "New SPA note", "date": "2025-01-14" }
    activate server
    server-->>browser: 201 Created (acknowledgement)
    deactivate server

    Note right of browser: The SPA updates the notes list dynamically without reloading the page
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, { "content": "SPA is cool", "date": "2025-01-14" }, { "content": "New SPA note", "date": "2025-01-14" }, ... ]
    deactivate server

    Note right of browser: The browser updates the view with the latest notes
