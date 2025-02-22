User.update(
  { status: 'active' }, 
  { where: { role: 'admin' } }
);
