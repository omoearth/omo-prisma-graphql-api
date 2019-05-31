"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mutation = void 0;

var _Authentication = require("../utils/Authentication");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Mutation = {
  register: function () {
    var _register = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_parent, _ref, _ref2) {
      var email, password, prisma;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              email = _ref.email, password = _ref.password;
              prisma = _ref2.prisma;
              return _context.abrupt("return", (0, _Authentication.registerUser)(prisma, email, password));

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function register(_x, _x2, _x3) {
      return _register.apply(this, arguments);
    }

    return register;
  }(),
  login: function () {
    var _login = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(_parent, _ref3, _ref4) {
      var email, password, prisma;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              email = _ref3.email, password = _ref3.password;
              prisma = _ref4.prisma;
              return _context2.abrupt("return", (0, _Authentication.loginUser)(prisma, email, password));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function login(_x4, _x5, _x6) {
      return _login.apply(this, arguments);
    }

    return login;
  }()
}; //     async loginUser(parent, { data }, { prisma }, info) {
//         const user = await prisma.query.user({
//             where: {
//                 email: data.email
//             }
//         })
//         if (!user) {
//             throw new Error("Login failed")
//         }
//         const isMatch = await bcrypt.compare(data.password, user.password)
//         if (!isMatch) {
//             throw new Error("Login failed")
//         }
//         return {
//             user,
//             token: generateToken(user.id)
//         }
//     },
//     deleteUser(parent, args, { prisma, request }, info) {
//         const userId = getUserId(request)
//         return prisma.mutation.deleteUser({
//             where: { id: userId }
//         }, info)
//     },
//    async updateUser(parent, { data }, { prisma, request}, info) {
//         const userId = getUserId(request)
//         if(typeof data.password === 'string') {
//             data.password = await hashPassword(data.password)
//         }
//         return prisma.mutation.updateUser({
//             where: {
//                 id: userId
//             },
//             data
//         }, info)
//     },
//     createCity(parent, { data }, { prisma, request }, info) {
//         const userId = getUserId(request)
//         return prisma.mutation.createCity({
//             data: {
//                 name: data.name,
//                 available: data.available,
//                 // author: {
//                 //     connect: {
//                 //         id: userId
//                 //     }
//                 // }
//             }
//         }, info)
//     },
//     async deleteCity(parent, { id }, { prisma, request }, info) {
//         const userId = getUserId(request)
//         // const cityExists = await prisma.exists.City({
//         //     id,
//         //     author: {
//         //         id: userId
//         //     }
//         // })
//         if (!cityExists) {
//             throw new Error("Not possible to delete City")
//         }
//         return prisma.mutation.deleteCity({
//             where: { id }
//         }, info)
//     },
//     async updateCity(parent, { id, data }, { prisma, request }, info) {
//         const userId = getUserId(request)
//         // const cityExists = await prisma.exists.City({
//         //     id,
//         //     author: {
//         //         id: userId
//         //     }
//         // })
//         if(!cityExists) {
//             throw new Error("Not possible to update City")
//         }
//         return prisma.mutation.updateCity({
//             where: { id },
//             data
//         }, info)
//     }
// }

exports.Mutation = Mutation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvbHZlcnMvTXV0YXRpb24udHMiXSwibmFtZXMiOlsiTXV0YXRpb24iLCJyZWdpc3RlciIsIl9wYXJlbnQiLCJlbWFpbCIsInBhc3N3b3JkIiwicHJpc21hIiwibG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQTs7Ozs7O0FBRU8sSUFBTUEsUUFBUSxHQUFHO0FBQ3RCQyxFQUFBQSxRQUFRO0FBQUE7QUFBQTtBQUFBLDRCQUFFLGlCQUFPQyxPQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF1QkMsY0FBQUEsS0FBdkIsUUFBdUJBLEtBQXZCLEVBQThCQyxRQUE5QixRQUE4QkEsUUFBOUI7QUFBaURDLGNBQUFBLE1BQWpELFNBQWlEQSxNQUFqRDtBQUFBLCtDQUFtRSxrQ0FBYUEsTUFBYixFQUFxQkYsS0FBckIsRUFBNEJDLFFBQTVCLENBQW5FOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUY7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsS0FEYztBQUd0QkUsRUFBQUEsS0FBSztBQUFBO0FBQUE7QUFBQSw0QkFBRSxrQkFBT0osT0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUJDLGNBQUFBLEtBQXZCLFNBQXVCQSxLQUF2QixFQUE4QkMsUUFBOUIsU0FBOEJBLFFBQTlCO0FBQWlEQyxjQUFBQSxNQUFqRCxTQUFpREEsTUFBakQ7QUFBQSxnREFDRSwrQkFBVUEsTUFBVixFQUFrQkYsS0FBbEIsRUFBeUJDLFFBQXpCLENBREY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUhpQixDQUFqQixDLENBUVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgZ2V0VXNlcklkIGZyb20gJy4uL3V0aWxzL2dldFVzZXJJZCdcbi8vIGltcG9ydCBnZW5lcmF0ZVRva2VuIGZyb20gJy4uL3V0aWxzL2dlbmVyYXRlVG9rZW4nXG4vLyBpbXBvcnQgaGFzaFBhc3N3b3JkIGZyb20gJy4uL3V0aWxzL2hhc2hQYXNzd29yZCdcbmltcG9ydCB7IFByaXNtYSB9IGZyb20gJy4uL2dlbmVyYXRlZC9wcmlzbWEudHMnO1xuXG5pbXBvcnQgeyByZWdpc3RlclVzZXIsIGxvZ2luVXNlciB9IGZyb20gJy4uL3V0aWxzL0F1dGhlbnRpY2F0aW9uJztcblxuZXhwb3J0IGNvbnN0IE11dGF0aW9uID0ge1xuICByZWdpc3RlcjogYXN5bmMgKF9wYXJlbnQ6IGFueSwgeyBlbWFpbCwgcGFzc3dvcmQgfTogYW55LCB7IHByaXNtYSB9OiBhbnkpID0+IHJlZ2lzdGVyVXNlcihwcmlzbWEsIGVtYWlsLCBwYXNzd29yZCksXG5cbiAgbG9naW46IGFzeW5jIChfcGFyZW50OiBhbnksIHsgZW1haWwsIHBhc3N3b3JkIH06IGFueSwgeyBwcmlzbWEgfTogYW55KSA9PiB7XG4gICAgcmV0dXJuIGxvZ2luVXNlcihwcmlzbWEsIGVtYWlsLCBwYXNzd29yZCk7XG4gIH0sXG59O1xuXG4vLyAgICAgYXN5bmMgbG9naW5Vc2VyKHBhcmVudCwgeyBkYXRhIH0sIHsgcHJpc21hIH0sIGluZm8pIHtcbi8vICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHByaXNtYS5xdWVyeS51c2VyKHtcbi8vICAgICAgICAgICAgIHdoZXJlOiB7XG4vLyAgICAgICAgICAgICAgICAgZW1haWw6IGRhdGEuZW1haWxcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgaWYgKCF1c2VyKSB7XG4vLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMb2dpbiBmYWlsZWRcIilcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBjb25zdCBpc01hdGNoID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoZGF0YS5wYXNzd29yZCwgdXNlci5wYXNzd29yZClcbi8vICAgICAgICAgaWYgKCFpc01hdGNoKSB7XG4vLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMb2dpbiBmYWlsZWRcIilcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4ge1xuLy8gICAgICAgICAgICAgdXNlcixcbi8vICAgICAgICAgICAgIHRva2VuOiBnZW5lcmF0ZVRva2VuKHVzZXIuaWQpXG4vLyAgICAgICAgIH1cbi8vICAgICB9LFxuLy8gICAgIGRlbGV0ZVVzZXIocGFyZW50LCBhcmdzLCB7IHByaXNtYSwgcmVxdWVzdCB9LCBpbmZvKSB7XG4vLyAgICAgICAgIGNvbnN0IHVzZXJJZCA9IGdldFVzZXJJZChyZXF1ZXN0KVxuLy8gICAgICAgICByZXR1cm4gcHJpc21hLm11dGF0aW9uLmRlbGV0ZVVzZXIoe1xuLy8gICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IHVzZXJJZCB9XG4vLyAgICAgICAgIH0sIGluZm8pXG4vLyAgICAgfSxcbi8vICAgIGFzeW5jIHVwZGF0ZVVzZXIocGFyZW50LCB7IGRhdGEgfSwgeyBwcmlzbWEsIHJlcXVlc3R9LCBpbmZvKSB7XG4vLyAgICAgICAgIGNvbnN0IHVzZXJJZCA9IGdldFVzZXJJZChyZXF1ZXN0KVxuLy8gICAgICAgICBpZih0eXBlb2YgZGF0YS5wYXNzd29yZCA9PT0gJ3N0cmluZycpIHtcbi8vICAgICAgICAgICAgIGRhdGEucGFzc3dvcmQgPSBhd2FpdCBoYXNoUGFzc3dvcmQoZGF0YS5wYXNzd29yZClcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gcHJpc21hLm11dGF0aW9uLnVwZGF0ZVVzZXIoe1xuLy8gICAgICAgICAgICAgd2hlcmU6IHtcbi8vICAgICAgICAgICAgICAgICBpZDogdXNlcklkXG4vLyAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgZGF0YVxuLy8gICAgICAgICB9LCBpbmZvKVxuLy8gICAgIH0sXG4vLyAgICAgY3JlYXRlQ2l0eShwYXJlbnQsIHsgZGF0YSB9LCB7IHByaXNtYSwgcmVxdWVzdCB9LCBpbmZvKSB7XG4vLyAgICAgICAgIGNvbnN0IHVzZXJJZCA9IGdldFVzZXJJZChyZXF1ZXN0KVxuXG4vLyAgICAgICAgIHJldHVybiBwcmlzbWEubXV0YXRpb24uY3JlYXRlQ2l0eSh7XG4vLyAgICAgICAgICAgICBkYXRhOiB7XG4vLyAgICAgICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuLy8gICAgICAgICAgICAgICAgIGF2YWlsYWJsZTogZGF0YS5hdmFpbGFibGUsXG4vLyAgICAgICAgICAgICAgICAgLy8gYXV0aG9yOiB7XG4vLyAgICAgICAgICAgICAgICAgLy8gICAgIGNvbm5lY3Q6IHtcbi8vICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlkOiB1c2VySWRcbi8vICAgICAgICAgICAgICAgICAvLyAgICAgfVxuLy8gICAgICAgICAgICAgICAgIC8vIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSwgaW5mbylcbi8vICAgICB9LFxuLy8gICAgIGFzeW5jIGRlbGV0ZUNpdHkocGFyZW50LCB7IGlkIH0sIHsgcHJpc21hLCByZXF1ZXN0IH0sIGluZm8pIHtcbi8vICAgICAgICAgY29uc3QgdXNlcklkID0gZ2V0VXNlcklkKHJlcXVlc3QpXG4vLyAgICAgICAgIC8vIGNvbnN0IGNpdHlFeGlzdHMgPSBhd2FpdCBwcmlzbWEuZXhpc3RzLkNpdHkoe1xuLy8gICAgICAgICAvLyAgICAgaWQsXG4vLyAgICAgICAgIC8vICAgICBhdXRob3I6IHtcbi8vICAgICAgICAgLy8gICAgICAgICBpZDogdXNlcklkXG4vLyAgICAgICAgIC8vICAgICB9XG4vLyAgICAgICAgIC8vIH0pXG4vLyAgICAgICAgIGlmICghY2l0eUV4aXN0cykge1xuLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IHBvc3NpYmxlIHRvIGRlbGV0ZSBDaXR5XCIpXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIHByaXNtYS5tdXRhdGlvbi5kZWxldGVDaXR5KHtcbi8vICAgICAgICAgICAgIHdoZXJlOiB7IGlkIH1cbi8vICAgICAgICAgfSwgaW5mbylcbi8vICAgICB9LFxuLy8gICAgIGFzeW5jIHVwZGF0ZUNpdHkocGFyZW50LCB7IGlkLCBkYXRhIH0sIHsgcHJpc21hLCByZXF1ZXN0IH0sIGluZm8pIHtcbi8vICAgICAgICAgY29uc3QgdXNlcklkID0gZ2V0VXNlcklkKHJlcXVlc3QpXG4vLyAgICAgICAgIC8vIGNvbnN0IGNpdHlFeGlzdHMgPSBhd2FpdCBwcmlzbWEuZXhpc3RzLkNpdHkoe1xuLy8gICAgICAgICAvLyAgICAgaWQsXG4vLyAgICAgICAgIC8vICAgICBhdXRob3I6IHtcbi8vICAgICAgICAgLy8gICAgICAgICBpZDogdXNlcklkXG4vLyAgICAgICAgIC8vICAgICB9XG4vLyAgICAgICAgIC8vIH0pXG4vLyAgICAgICAgIGlmKCFjaXR5RXhpc3RzKSB7XG4vLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgcG9zc2libGUgdG8gdXBkYXRlIENpdHlcIilcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gcHJpc21hLm11dGF0aW9uLnVwZGF0ZUNpdHkoe1xuLy8gICAgICAgICAgICAgd2hlcmU6IHsgaWQgfSxcbi8vICAgICAgICAgICAgIGRhdGFcbi8vICAgICAgICAgfSwgaW5mbylcbi8vICAgICB9XG4vLyB9XG4iXX0=