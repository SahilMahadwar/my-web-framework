import { User } from './models/User';

const user = new User({ name: 'RICK', age: 0 });

user.attributes.get('id');

user.sync.save({});
