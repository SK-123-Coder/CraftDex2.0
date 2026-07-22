// Admin auth verification

export const verifyAdminPassword = async (req, res) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({
        success: false,
        message: "Password is required",
      });
    }

    if (password === process.env.ADMIN_PASSWORD) {
      return res.status(200).json({
        success: true,
      });
    }

    return res.status(401).json({
      success: false,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};