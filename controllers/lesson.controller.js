const lessonsService = require('../services/lesson.service')

const getAllLessons = async (req,res) => {
    const [lessons] = await lessonsService.getAllLessons()
    res.status(200).json({
        message: "Sukses dalam mengambil data",
        data : lessons
    })
}

const createLessons = async (req, res) => {
    const createdLessons = await lessonsService.createLessons(req.body)
    res.status(201).json({
        message: "Sukses menambah lessons",
        data: createdLessons
    })
}

const getLessonsById = async (req, res) => {
    const [lessons] = await lessonsService.getLessonsById (req.params.id)
    if (!lessons) res.status(404).json({ message: "lessons not found"})
    res.status(200).json({
        message: "Sukses dalam mengambil data",
        data: lessons
    })
}

module.exports = { getAllLessons, createLessons, getLessonsById }
