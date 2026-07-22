// Provide registered users detail to admin page
import express from "express";
import { createClient } from "@supabase/supabase-js";

const router = express.Router();

router.get("/registered-users", async (req, res) => {

    const supabaseAdmin = createClient(
        process.env.SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    const { data, error } = await supabaseAdmin.auth.admin.listUsers();

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.json({
        registeredUsers: data.users.length,
    });
});

export default router;