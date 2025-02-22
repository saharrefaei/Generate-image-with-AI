const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://saharrefaei1999:91oWMjCllRR56eYH@ai-image-generator.0agw1.mongodb.net/ai-image-generator?retryWrites=true&w=majority');
    console.log('DB CONNECTED');
  } catch (error) {
    console.error('DB CONNECTION ERROR:', error);
  }
};

connectDB();
