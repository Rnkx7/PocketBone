import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const BoneApi = async (req, res) => {
  console.log("printing");
  console.log(req.body);
  if (req.method != "POST") {
    return res.status(405).json({ message: "method not allowed" });
  }
  const walletData = JSON.parse(req?.body);
  const upsertUser = await prisma.wallets.upsert({
    where: {
      id: walletData.id,
    },
    update: {
      id: walletData.id,
      mintcount: walletData.quantity,
    },
    create: {
      id: walletData.id,
      mintcount: walletData.quantity,
    },
  });
  res.json(upsertUser);

  // if (!walletData.exists) {
  //   const savedWallet = await prisma.wallets.create({
  //     data: {
  //       address: walletData.wallet,
  //       mintcount: walletData.quantity,
  //     },
  //   });
  //   res.json(savedWallet);
  // } else {
  //   const idString = walletData.id.toString()
  //   const updatedWallet = await prisma.wallets.update({
  //     where: { id: walletData.id, },
  //     data: {
  //       address: walletData.wallet,
  //       mintcount: walletData.quantity,
  //     },
  //   });
  //   res.json(updatedWallet);
  // }
};

export default BoneApi;
