const router = require('express').Router();
const db = require('../db/db');

router.get('/t/:ticketId', (req, res) => {
    const ticketId = req.params.ticketId;
    const ticket = db.findById(ticketId);
    res.status(200).json({message: 'Get individual ticket', ticket});
});
router.patch('/t/:ticketId', (req, res) => {
    const ticketId = req.params.ticketId;
    const updatedTicket = db.updateById(ticketId, req.body);
    res.status(200).json({message: 'Ticket updated successfully', updatedTicket});
});
router.delete('/t/:ticketId', (req, res) => {
    const ticketId = req.params.ticketId;
    db.deleteById(ticketId);
    res.status(203).send();
});
router.get('/u/:username', (req, res) => {
    const username = req.params.username;
    const tickets = db.findByUsername(username);
    res.status(200).json(tickets);
});
router.patch(() => {});
router.delete(() => {});
router.post('/sell', (req, res) => {
    const { username, price } = req.body;
    const ticket = db.create(username, price);
    res.status(201).json({message: 'Ticket is created successfully', ticket});
});
router.post('/bulk', (req, res) => {
    const { username, price, quantity } = req.body;
    const tickets = db.bulkCreate(username, price, quantity);
    res.status(201).json({message: 'Bulk ticket is created successfully', tickets});
});
router.get('/draw', (req, res) => {
    const winnerCount = req.query.wc ?? 3;
    const winner = db.draw(winnerCount);
    res.status(200).json(winner);
});
router.get('', (_req, res) => {
    const tickets = db.find();
    res.status(200).json(tickets);
});

module.exports = router;