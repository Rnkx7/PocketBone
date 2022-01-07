import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const BoneApi = async (req, res) => {
  console.log("printing");
  console.log(req.body);
  if (req.method != "POST") {
    return res.status(405).json({ message: "method not allowed" });
  }
  const walletData = JSON.parse(req?.body);
  if (!walletData.exists) {
    const createwallet = await prisma.wallets.create({
      data: {
        mintcount: walletData.quantity,
        address: walletData.address,
      },
    })
    res.json(createwallet);
  } else {
    const updateUser = await prisma.wallets.update({
      where: {
        id: walletData.id,
      },
      data: {
        mintcount: walletData.quantity,
        address: walletData.address,
      },
    })
    res.json(updateUser);
  }
};

export default BoneApi;
