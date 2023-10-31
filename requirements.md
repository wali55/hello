# Lottery API Requirements
- Sell lottery ticket
- Update lottery ticket
- Delete lottery ticket
- Get all tickets
- Get ticket by id
- Bulk buy(User can buy multiple tickets at a time)
- Raffle draw

# Ticket
- number(Unique)
- username
- price
- timestamp

# Routes
- /tickets/t/:ticketId  - find individual ticket by ticketId(GET)
- /tickets/t/:ticketId  - update individual ticket by ticketId(PATCH)
- /tickets/t/:ticketId  - delete individual ticket by ticketId(DELETE)
- /tickets/u/:username  - find tickets by username(GET)
- /tickets/u/:username  - update tickets for a given user(PATCH)
- /tickets/u/:username  - delete all tickets for a given user(DELETE)
- /tickets/sell         - create ticket(POST)
- /tickets/bulk         - bulk create tickets(POST)
- /tickets/draw         - Raffle Draw
- /tickets              - find all tickets(GET)

# MongoDB Realm Services
- FAAS - Function As A Service
- BAAS - Backend As A Service