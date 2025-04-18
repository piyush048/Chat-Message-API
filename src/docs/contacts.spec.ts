/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Contact Management
 */

/**
 * @swagger
 * /contacts/request:
 *   post:
 *     summary: Send a contact request
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               receiverId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact request sent
 */

/**
 * @swagger
 * /contacts/accept:
 *   post:
 *     summary: Accept a contact request
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               senderId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Contact request accepted
 */

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: List all accepted contacts
 *     tags: [Contacts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of contacts
 */
