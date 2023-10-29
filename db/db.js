const Ticket = require("../models/Ticket");

class MyDB {
  constructor() {
    this.tickets = [];
  }

  /**
   * Create and save a new ticket
   * @param {string} username
   * @param {number} price
   * @returns {Ticket} return a ticket object
   */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }

  /**
   * Create multiple ticket for a single user
   * @param {string} username
   * @param {number} price
   * @param {number} quantity
   * @returns {Array<Ticket>}
   */
  bulkCreate(username, price, quantity) {
    const result = [];
    for (let i = 0; i < quantity; i++) {
      const ticket = this.create(username, price);
      result.push(ticket);
    }
    return result;
  }

  /**
   * Return all available tickets
   */
  find() {
    return this.tickets;
  }

  /**
   *
   * @param {string} ticketId
   * @returns {Ticket}
   */
  findById(ticketId) {
    const ticket = this.tickets.find(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => {
        ticket.id === ticketId;
      }
    );
    return ticket;
  }

  /**
   * Find all tickets for a given user
   * @param {string} username
   * @returns {Array<Ticket>}
   */
  findByUsername(username) {
    const tickets = this.tickets.filter(
      /**
       * @param {Ticket} ticket
       */
      (ticket) => {
        ticket.username === username;
      }
    );
    return tickets;
  }

  /**
   * Update ticket
   * @param {string} ticketId 
   * @param {{username: string, price: number}} ticketBody 
   * @returns {Ticket}
   */
  updateById(ticketId, ticketBody) {
    const ticket = this.findById(ticketId);
    ticket.username = ticketBody.username ?? ticket.username;
    ticket.price = ticketBody.price ?? ticket.price;
    ticket.updatedAt = new Date();
    return ticket;
  }

  /**
   * Delete ticket
   * @param {string} ticketId
   */
  deleteById(ticketId) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);
    if (index !== -1) {
        this.tickets.splice(index, 1);
        return true;
    } else {
        return false;
    }
  }

  /**
   * Find winners
   * @param {number} winnerCount
   * @returns {Array<Ticket>}
   */
  draw(winnerCount) {
    const indexes = new Array(winnerCount);
    for (let i = 0; i < indexes.length; i++) {
        let index = Math.floor(Math.random * this.tickets.length);
        while (indexes.includes(index)) {
            index = Math.floor(Math.random * this.tickets.length);
        }
        indexes.push(index);
    }
    const winners = indexes.map((index) => this.tickets[index]);
    return winners;
  }
}

const myDB = new MyDB();

module.exports = myDB;
