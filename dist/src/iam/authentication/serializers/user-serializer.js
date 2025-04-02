"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSerializer = void 0;
const passport_1 = require("@nestjs/passport");
class UserSerializer extends passport_1.PassportSerializer {
    serializeUser(user, done) {
        console.log('SERIALIZED user', user.sid);
        done(null, user);
    }
    async deserializeUser(payload, done) {
        console.log('DESERIALIZED', payload);
        done(null, payload);
    }
}
exports.UserSerializer = UserSerializer;
//# sourceMappingURL=user-serializer.js.map