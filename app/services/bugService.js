const pool = require("../database/db");

exports.getAllBugs = async () => {

    const result = await pool.query(
        "SELECT * FROM bugs ORDER BY created_at DESC"
    );

    return result.rows;

};

exports.getBugById = async (id) => {

    const result = await pool.query(

        "SELECT * FROM bugs WHERE id=$1",

        [id]

    );

    return result.rows[0];

};

exports.createBug = async (bug) => {

    const result = await pool.query(

        `
        INSERT INTO bugs
        (title,description,priority,status,assigned_to)

        VALUES($1,$2,$3,$4,$5)

        RETURNING *
        `,

        [

            bug.title,
            bug.description,
            bug.priority,
            bug.status,
            bug.assigned_to

        ]

    );

    return result.rows[0];

};

exports.updateBug = async (id, bug) => {

    const result = await pool.query(

        `
        UPDATE bugs

        SET
        title=$1,
        description=$2,
        priority=$3,
        status=$4,
        assigned_to=$5

        WHERE id=$6

        RETURNING *
        `,

        [

            bug.title,
            bug.description,
            bug.priority,
            bug.status,
            bug.assigned_to,
            id

        ]

    );

    return result.rows[0];

};

exports.deleteBug = async (id) => {

    await pool.query(

        "DELETE FROM bugs WHERE id=$1",

        [id]

    );

};