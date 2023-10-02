// bikin modul prisma connector ke database
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// prisma buat neggantiin pool yang ada di database.js
module.exports = { prisma }