async function updateUser(id, newName) {
  await User.update(
    { name: newName },
    { where: { id: id } }
  );

  const updatedUser = await User.findOne({ where: { id: id } });
  console.log('Updated User:', updatedUser);
}

updateUser(1, 'John Doe');
