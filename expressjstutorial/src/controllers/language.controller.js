//import { getConnection } from "./../database/database.js";
//const pool=require('./../database/database');
import pool from "./../database/database.js";
import poolDB from "./../database/database.js";

const getLanguages=async (req,res)=>{

    try {
        const language=await pool.query('SELECT * FROM languages');
        res.json(language);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const getLanguage=async (req,res)=>{

    try {
        const {id} =req.params;
        const language=await pool.query('SELECT * FROM languages WHERE id=?',id);
        res.json(language);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const deleteLanguage=async (req,res)=>{

    try {
        const {id} =req.params;
        const result=await pool.query('DELETE FROM languages WHERE id=?',id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const updateLanguage=async (req,res)=>{

    try {
        const {id} =req.params;
        const {nombre,programmers}=req.body;
        const language={id,nombre,programmers};
        const result=await pool.query('UPDATE languages SET ? WHERE id=?',[language,id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

};

const createLanguage=async(req,res)=>{
    
    try {
        const {nombre,programmers}=req.body;
        const language={
            nombre,programmers
        };
        const result=await pool.query('INSERT INTO languages SET ?', language);
        console.log(req.body)
        res.json(result)
    } catch (error) { 
        res.status(500);
        res.send(error.message);    
    }
}

export const methods={
    getLanguages,
    createLanguage,
    getLanguage,
    deleteLanguage,
    updateLanguage
};