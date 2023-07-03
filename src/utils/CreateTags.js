import Tag from '@/models/Tags.js';

const createDefaultTags = async () => {
  try {
    // Verificar si ya existen tags en la base de datos
    const existingTags = await Tag.countDocuments();

    if (existingTags === 0) {
      // Crear los tags predefinidos
      const tagsData = [
        { name: 'arte' },
        { name: 'música' },
        { name: 'paisaje' },
      ];

      // Insertar los tags en la base de datos
      await Tag.insertMany(tagsData);

      console.log('Tags predefinidos creados con éxito.');
    } else {
      console.log('Los tags predefinidos ya existen en la base de datos.');
    }
  } catch (error) {
    console.error('Error al crear los tags predefinidos:', error);
  }
};

export default createDefaultTags;
