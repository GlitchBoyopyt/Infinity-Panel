User.update(
  { name: 'Updated Name' },
  { where: { id: 2 }, returning: true }
)
.then(([rowsUpdated, [updatedUser]]) => {
  console.log('Updated User:', updatedUser);
});
