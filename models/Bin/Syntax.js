Model.update(
  { columnName: 'newValue' }, // Data to update
  { where: { conditionKey: conditionValue } } // Condition to find records
)
.then(() => {
  console.log('Record updated successfully!');
})
.catch((error) => {
  console.error('Error updating record:', error);
});
