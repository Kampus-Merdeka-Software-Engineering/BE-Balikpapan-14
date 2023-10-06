// const {pool}= require('../config/database');
const { prisma } = require('../config/prisma');

async function getAllAssignmentSatu() {
    try {
      const assignment1 = await prisma.assignment1.findMany();
      return assignment1;
    } catch (error) {
      console.log(error);
    }
  }

    async function createAssignmentSatu(assignment1) {
        try {
          const createdAssignmentSatu = await prisma.assignment1.create({
            data: {
                assignment: assignment1.assignment,
                deadline: assignment1.deadline,
                date_modified: assignment1.date_modified,
                grade: assignment1.grade,
                status: assignment1.status,
            }
          })
          return createdAssignmentSatu;
        } catch (error) {
          throw new Error(error)
        }
      }

module.exports= {getAllAssignmentSatu, createAssignmentSatu}