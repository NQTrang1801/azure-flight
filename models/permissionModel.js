import mongoose from 'mongoose';

const permissionSchema = new mongoose.Schema({
    group_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', required: true },
    functionality_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Functuionality', required: true }
});

const Permission = mongoose.model('Permission', permissionSchema);

export default Permission;