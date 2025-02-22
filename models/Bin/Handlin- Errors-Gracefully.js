User.update({ email: 'test@example.com' }, { where: { id: 99 } })
  .then(([affectedRows]) => {
    if (affectedRows === 0) {
      console.log('No records were updated.');
    } else {
      console.log(`${affectedRows} record(s) updated.`);
    }
  })
  .catch((err) => console.error('Error:', err));
