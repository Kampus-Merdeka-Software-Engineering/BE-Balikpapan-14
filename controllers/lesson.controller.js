const {pool} = require('../config/database');
const lessonsService= require('../services/lesson.service');

const getAllLessons = async(req, res) => {
    const [lessons] = await lessonsService.getAllLessons()
    res.status(200).json({
        message: "Sukses mengambil data lessons",
        data: lessons
    })
}

const createLessons = async(req, res) => {
    const createdLessons= await lessonsService.createLessons(req.body)
    res.status(201).json ({
        message: "Sukses menambah data lessons",
        data: createdLessons
    })
}

const getLessonsById = async (req, res) => {
    const [lessons] = await lessonsService.getLessonsById(req.params.id)
    if (!lessons) res.status(404).json({message: "Data tidak ditemukan"})
    res.status(200).json({
        message: "Sukses mengambil data lessons by id",
        data: lessons
    })
}

module.exports= {getAllLessons, createLessons, getLessonsById}