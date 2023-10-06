// const {pool}= require('../config/database');
const { prisma } = require('../config/prisma');

async function getAllLessons() {
    try {
      const lessons = await prisma.lessons.findMany();
      return lessons;
    } catch (error) {
      console.log(error);
    }
  }

    async function createLessons(lessons) {
        try {
          const createdLessons = await prisma.lessons.create({
            data: {
                image: lessons.image,
                nama_mapel: lessons.nama_mapel,
                module: lessons.module,
            }
          })
          return createdLessons;
        } catch (error) {
          throw new Error(error)
        }
      }

module.exports= {getAllLessons, createLessons}