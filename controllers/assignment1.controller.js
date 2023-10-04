const {pool} = require('../config/database');
const assignmentSatuService= require('../services/assignment1.services');

const getAllAssignmentSatu = async(req, res) => {
    const [assignmentSatu] = await assignmentSatuService.getAllAssignmentSatu()
    res.status(200).json({
        message: "Sukses mengambil data assignement 1",
        data: assignmentSatu
    })
}

const createAssignmentSatu = async(req, res) => {
    const createdAssignmentSatu= await assignmentSatuService.createAssignmentSatu (req.body)
    res.status(201).json ({
        message: "Sukses menambah data assignment 1",
        data: createdAssignmentSatu
    })
}

const getAssignmentSatuById = async (req, res) => {
    const [assignmentSatu] = await assignmentSatuService.getAssignmentSatuById(req.params.id)
    if (!assignmentSatu) res.status(404).json({message: "Data tidak ditemukan"})
    res.status(200).json({
        message: "Sukses mengambil data assignment 1 by id",
        data: assignmentSatu
    })
}

module.exports= {getAllAssignmentSatu, createAssignmentSatu, getAssignmentSatuById}