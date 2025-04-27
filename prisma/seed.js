const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await bcrypt.hash('admin123', 10);
  
  await prisma.users.create({
    data: {
      username: 'admin',
      display_name: 'Administrator',
      email: 'admin@123.com',
      password: adminPassword,
      role: 'admin'
    }
  });
  console.log('Admin user created');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
