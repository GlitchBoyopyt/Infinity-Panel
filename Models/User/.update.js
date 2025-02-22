const Model = require('./models/User'); // Replace with your actual model

Model.update(
  { columnName: 'newValue' }, // New values
  { where: { id: someId } }   // Condition to match records
)
.then(() => {
  console.log('Record updated successfully!');
})
.catch((error) => {
  console.error('Error updating record:', error);
});
