"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerUser = registerUser;
exports.loginUser = loginUser;

var bcrypt = _interopRequireWildcard(require("bcryptjs"));

var jwt = _interopRequireWildcard(require("jsonwebtoken"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function hashPassword(_x) {
  return _hashPassword.apply(this, arguments);
}

function _hashPassword() {
  _hashPassword = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(password) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(password.length < 8)) {
              _context.next = 2;
              break;
            }

            throw new Error('Password has to be minimum 8 characters long');

          case 2:
            _context.next = 4;
            return bcrypt.hash(password, 10);

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _hashPassword.apply(this, arguments);
}

function registerUser(_x2, _x3, _x4) {
  return _registerUser.apply(this, arguments);
}

function _registerUser() {
  _registerUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(prisma, email, password) {
    var user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.t0 = prisma;
            _context2.t1 = email;
            _context2.next = 4;
            return hashPassword(password);

          case 4:
            _context2.t2 = _context2.sent;
            _context2.t3 = {
              email: _context2.t1,
              password: _context2.t2
            };
            _context2.next = 8;
            return _context2.t0.createUser.call(_context2.t0, _context2.t3);

          case 8:
            user = _context2.sent;
            return _context2.abrupt("return", user);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _registerUser.apply(this, arguments);
}

function loginUser(_x5, _x6, _x7) {
  return _loginUser.apply(this, arguments);
}

function _loginUser() {
  _loginUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(prisma, email, password) {
    var user, passwordMatch, token;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return prisma.user({
              email: email
            });

          case 2:
            user = _context3.sent;

            if (user) {
              _context3.next = 5;
              break;
            }

            throw new Error('Invalid Login');

          case 5:
            _context3.next = 7;
            return bcrypt.compare(password, user.password || '');

          case 7:
            passwordMatch = _context3.sent;

            if (passwordMatch) {
              _context3.next = 10;
              break;
            }

            throw new Error('Invalid Login');

          case 10:
            token = jwt.sign({
              id: user.id,
              username: user.email
            }, process.env.OMO_SECRET || '', {
              expiresIn: '30d' // token will expire in 30days

            });
            return _context3.abrupt("return", {
              token: token,
              user: user
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _loginUser.apply(this, arguments);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9BdXRoZW50aWNhdGlvbi50cyJdLCJuYW1lcyI6WyJoYXNoUGFzc3dvcmQiLCJwYXNzd29yZCIsImxlbmd0aCIsIkVycm9yIiwiYmNyeXB0IiwiaGFzaCIsInJlZ2lzdGVyVXNlciIsInByaXNtYSIsImVtYWlsIiwiY3JlYXRlVXNlciIsInVzZXIiLCJsb2dpblVzZXIiLCJjb21wYXJlIiwicGFzc3dvcmRNYXRjaCIsInRva2VuIiwiand0Iiwic2lnbiIsImlkIiwidXNlcm5hbWUiLCJwcm9jZXNzIiwiZW52IiwiT01PX1NFQ1JFVCIsImV4cGlyZXNJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7U0FHZUEsWTs7Ozs7OzswQkFBZixpQkFBNEJDLFFBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFDTUEsUUFBUSxDQUFDQyxNQUFULEdBQWtCLENBRHhCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQUVVLElBQUlDLEtBQUosQ0FBVSw4Q0FBVixDQUZWOztBQUFBO0FBQUE7QUFBQSxtQkFJZUMsTUFBTSxDQUFDQyxJQUFQLENBQVlKLFFBQVosRUFBc0IsRUFBdEIsQ0FKZjs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FPZUssWTs7Ozs7OzswQkFBZixrQkFBNEJDLE1BQTVCLEVBQTRDQyxLQUE1QyxFQUEyRFAsUUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQ21CTSxNQURuQjtBQUFBLDJCQUVXQyxLQUZYO0FBQUE7QUFBQSxtQkFHb0JSLFlBQVksQ0FBQ0MsUUFBRCxDQUhoQzs7QUFBQTtBQUFBO0FBQUE7QUFFSU8sY0FBQUEsS0FGSjtBQUdJUCxjQUFBQSxRQUhKO0FBQUE7QUFBQTtBQUFBLGdDQUMwQlEsVUFEMUI7O0FBQUE7QUFDTUMsWUFBQUEsSUFETjtBQUFBLDhDQUtTQSxJQUxUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7U0FRZUMsUzs7Ozs7OzswQkFBZixrQkFBeUJKLE1BQXpCLEVBQXlDQyxLQUF6QyxFQUF3RFAsUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDcUJNLE1BQU0sQ0FBQ0csSUFBUCxDQUFZO0FBQzdCRixjQUFBQSxLQUFLLEVBQUVBO0FBRHNCLGFBQVosQ0FEckI7O0FBQUE7QUFDUUUsWUFBQUEsSUFEUjs7QUFBQSxnQkFLT0EsSUFMUDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFNVSxJQUFJUCxLQUFKLENBQVUsZUFBVixDQU5WOztBQUFBO0FBQUE7QUFBQSxtQkFTOEJDLE1BQU0sQ0FBQ1EsT0FBUCxDQUFlWCxRQUFmLEVBQXlCUyxJQUFJLENBQUNULFFBQUwsSUFBaUIsRUFBMUMsQ0FUOUI7O0FBQUE7QUFTUVksWUFBQUEsYUFUUjs7QUFBQSxnQkFXT0EsYUFYUDtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrQkFZVSxJQUFJVixLQUFKLENBQVUsZUFBVixDQVpWOztBQUFBO0FBZVFXLFlBQUFBLEtBZlIsR0FlZ0JDLEdBQUcsQ0FBQ0MsSUFBSixDQUNaO0FBQ0VDLGNBQUFBLEVBQUUsRUFBRVAsSUFBSSxDQUFDTyxFQURYO0FBRUVDLGNBQUFBLFFBQVEsRUFBRVIsSUFBSSxDQUFDRjtBQUZqQixhQURZLEVBS1pXLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUFaLElBQTBCLEVBTGQsRUFNWjtBQUNFQyxjQUFBQSxTQUFTLEVBQUUsS0FEYixDQUNvQjs7QUFEcEIsYUFOWSxDQWZoQjtBQUFBLDhDQXlCUztBQUNMUixjQUFBQSxLQUFLLEVBQUxBLEtBREs7QUFFTEosY0FBQUEsSUFBSSxFQUFKQTtBQUZLLGFBekJUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSAnYmNyeXB0anMnO1xuaW1wb3J0ICogYXMgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XG5pbXBvcnQgeyBQcmlzbWEgfSBmcm9tICcuLi9nZW5lcmF0ZWQvcHJpc21hLnRzJztcblxuYXN5bmMgZnVuY3Rpb24gaGFzaFBhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Bhc3N3b3JkIGhhcyB0byBiZSBtaW5pbXVtIDggY2hhcmFjdGVycyBsb25nJyk7XG4gIH1cbiAgcmV0dXJuIGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlZ2lzdGVyVXNlcihwcmlzbWE6IFByaXNtYSwgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICBsZXQgdXNlciA9IGF3YWl0IHByaXNtYS5jcmVhdGVVc2VyKHtcbiAgICBlbWFpbDogZW1haWwsXG4gICAgcGFzc3dvcmQ6IGF3YWl0IGhhc2hQYXNzd29yZChwYXNzd29yZCksXG4gIH0pO1xuICByZXR1cm4gdXNlcjtcbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9naW5Vc2VyKHByaXNtYTogUHJpc21hLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBwcmlzbWEudXNlcih7XG4gICAgZW1haWw6IGVtYWlsLFxuICB9KTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgTG9naW4nKTtcbiAgfVxuXG4gIGNvbnN0IHBhc3N3b3JkTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShwYXNzd29yZCwgdXNlci5wYXNzd29yZCB8fCAnJyk7XG5cbiAgaWYgKCFwYXNzd29yZE1hdGNoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIExvZ2luJyk7XG4gIH1cblxuICBjb25zdCB0b2tlbiA9IGp3dC5zaWduKFxuICAgIHtcbiAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgdXNlcm5hbWU6IHVzZXIuZW1haWwsXG4gICAgfSxcbiAgICBwcm9jZXNzLmVudi5PTU9fU0VDUkVUIHx8ICcnLFxuICAgIHtcbiAgICAgIGV4cGlyZXNJbjogJzMwZCcsIC8vIHRva2VuIHdpbGwgZXhwaXJlIGluIDMwZGF5c1xuICAgIH1cbiAgKTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbixcbiAgICB1c2VyLFxuICB9O1xufVxuXG5leHBvcnQgeyByZWdpc3RlclVzZXIsIGxvZ2luVXNlciB9O1xuIl19