"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.server = void 0;

var _graphqlYoga = require("graphql-yoga");

var _prisma = _interopRequireDefault(require("./prisma"));

var _index = require("./resolvers/index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require('dotenv').config();

var jwt = require('jsonwebtoken');

var pubsub = new _graphqlYoga.PubSub();

function getUser(request) {
  try {
    var tokenWithBearer = request.headers.authorization || '';
    var token = tokenWithBearer.split(' ')[1];

    if (token) {
      return jwt.verify(token, process.env.OMO_SECRET);
    }

    return null;
  } catch (err) {
    return null;
  }
} // const getUser = request => {
//   try {
//     let tokenWithBearer = request.headers.authorization || '';
//     const token = tokenWithBearer.split(' ')[1];
//     if (token) {
//       return jwt.verify(token, process.env.OMO_SECRET);
//     }
//     return null;
//   } catch (err) {
//     return null;
//   }
// };


var server = new _graphqlYoga.GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers: _index.resolvers,
  context: function context(request) {
    var user = getUser(request);
    return {
      user: user,
      pubsub: pubsub,
      prisma: _prisma["default"],
      fragmentReplacements: _index.fragmentReplacements,
      request: request
    };
  },
  resolverValidationOptions: {
    requireResolversForResolveType: false
  }
});
exports.server = server;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIudHMiXSwibmFtZXMiOlsicmVxdWlyZSIsImNvbmZpZyIsImp3dCIsInB1YnN1YiIsIlB1YlN1YiIsImdldFVzZXIiLCJyZXF1ZXN0IiwidG9rZW5XaXRoQmVhcmVyIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ0b2tlbiIsInNwbGl0IiwidmVyaWZ5IiwicHJvY2VzcyIsImVudiIsIk9NT19TRUNSRVQiLCJlcnIiLCJzZXJ2ZXIiLCJHcmFwaFFMU2VydmVyIiwidHlwZURlZnMiLCJyZXNvbHZlcnMiLCJjb250ZXh0IiwidXNlciIsInByaXNtYSIsImZyYWdtZW50UmVwbGFjZW1lbnRzIiwicmVzb2x2ZXJWYWxpZGF0aW9uT3B0aW9ucyIsInJlcXVpcmVSZXNvbHZlcnNGb3JSZXNvbHZlVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOztBQUNBOztBQUNBOzs7O0FBTEFBLE9BQU8sQ0FBQyxRQUFELENBQVAsQ0FBa0JDLE1BQWxCOztBQUNBLElBQU1DLEdBQUcsR0FBR0YsT0FBTyxDQUFDLGNBQUQsQ0FBbkI7O0FBS0EsSUFBTUcsTUFBTSxHQUFHLElBQUlDLG1CQUFKLEVBQWY7O0FBRUEsU0FBU0MsT0FBVCxDQUFpQkMsT0FBakIsRUFBK0I7QUFDN0IsTUFBSTtBQUNGLFFBQUlDLGVBQWUsR0FBR0QsT0FBTyxDQUFDRSxPQUFSLENBQWdCQyxhQUFoQixJQUFpQyxFQUF2RDtBQUNBLFFBQU1DLEtBQUssR0FBR0gsZUFBZSxDQUFDSSxLQUFoQixDQUFzQixHQUF0QixFQUEyQixDQUEzQixDQUFkOztBQUNBLFFBQUlELEtBQUosRUFBVztBQUNULGFBQU9SLEdBQUcsQ0FBQ1UsTUFBSixDQUFXRixLQUFYLEVBQWtCRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBOUIsQ0FBUDtBQUNEOztBQUNELFdBQU8sSUFBUDtBQUNELEdBUEQsQ0FPRSxPQUFPQyxHQUFQLEVBQVk7QUFDWixXQUFPLElBQVA7QUFDRDtBQUNGLEMsQ0FDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVPLElBQU1DLE1BQU0sR0FBRyxJQUFJQywwQkFBSixDQUFrQjtBQUN0Q0MsRUFBQUEsUUFBUSxFQUFFLG9CQUQ0QjtBQUV0Q0MsRUFBQUEsU0FBUyxFQUFUQSxnQkFGc0M7QUFHdENDLEVBQUFBLE9BSHNDLG1CQUc5QmYsT0FIOEIsRUFHckI7QUFDZixRQUFNZ0IsSUFBSSxHQUFHakIsT0FBTyxDQUFDQyxPQUFELENBQXBCO0FBQ0EsV0FBTztBQUNMZ0IsTUFBQUEsSUFBSSxFQUFKQSxJQURLO0FBRUxuQixNQUFBQSxNQUFNLEVBQU5BLE1BRks7QUFHTG9CLE1BQUFBLE1BQU0sRUFBTkEsa0JBSEs7QUFJTEMsTUFBQUEsb0JBQW9CLEVBQXBCQSwyQkFKSztBQUtMbEIsTUFBQUEsT0FBTyxFQUFQQTtBQUxLLEtBQVA7QUFPRCxHQVpxQztBQWF0Q21CLEVBQUFBLHlCQUF5QixFQUFFO0FBQ3pCQyxJQUFBQSw4QkFBOEIsRUFBRTtBQURQO0FBYlcsQ0FBbEIsQ0FBZiIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuY29uc3Qgand0ID0gcmVxdWlyZSgnanNvbndlYnRva2VuJyk7XG5cbmltcG9ydCB7IEdyYXBoUUxTZXJ2ZXIsIFB1YlN1YiB9IGZyb20gJ2dyYXBocWwteW9nYSc7XG5pbXBvcnQgcHJpc21hIGZyb20gJy4vcHJpc21hJztcbmltcG9ydCB7IHJlc29sdmVycywgZnJhZ21lbnRSZXBsYWNlbWVudHMgfSBmcm9tICcuL3Jlc29sdmVycy9pbmRleCc7XG5jb25zdCBwdWJzdWIgPSBuZXcgUHViU3ViKCk7XG5cbmZ1bmN0aW9uIGdldFVzZXIocmVxdWVzdDogYW55KSB7XG4gIHRyeSB7XG4gICAgbGV0IHRva2VuV2l0aEJlYXJlciA9IHJlcXVlc3QuaGVhZGVycy5hdXRob3JpemF0aW9uIHx8ICcnO1xuICAgIGNvbnN0IHRva2VuID0gdG9rZW5XaXRoQmVhcmVyLnNwbGl0KCcgJylbMV07XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICByZXR1cm4gand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuT01PX1NFQ1JFVCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuLy8gY29uc3QgZ2V0VXNlciA9IHJlcXVlc3QgPT4ge1xuLy8gICB0cnkge1xuLy8gICAgIGxldCB0b2tlbldpdGhCZWFyZXIgPSByZXF1ZXN0LmhlYWRlcnMuYXV0aG9yaXphdGlvbiB8fCAnJztcbi8vICAgICBjb25zdCB0b2tlbiA9IHRva2VuV2l0aEJlYXJlci5zcGxpdCgnICcpWzFdO1xuLy8gICAgIGlmICh0b2tlbikge1xuLy8gICAgICAgcmV0dXJuIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52Lk9NT19TRUNSRVQpO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gbnVsbDtcbi8vICAgfSBjYXRjaCAoZXJyKSB7XG4vLyAgICAgcmV0dXJuIG51bGw7XG4vLyAgIH1cbi8vIH07XG5cbmV4cG9ydCBjb25zdCBzZXJ2ZXIgPSBuZXcgR3JhcGhRTFNlcnZlcih7XG4gIHR5cGVEZWZzOiAnc3JjL3NjaGVtYS5ncmFwaHFsJyxcbiAgcmVzb2x2ZXJzLFxuICBjb250ZXh0KHJlcXVlc3QpIHtcbiAgICBjb25zdCB1c2VyID0gZ2V0VXNlcihyZXF1ZXN0KTtcbiAgICByZXR1cm4ge1xuICAgICAgdXNlcixcbiAgICAgIHB1YnN1YixcbiAgICAgIHByaXNtYSxcbiAgICAgIGZyYWdtZW50UmVwbGFjZW1lbnRzLFxuICAgICAgcmVxdWVzdCxcbiAgICB9O1xuICB9LFxuICByZXNvbHZlclZhbGlkYXRpb25PcHRpb25zOiB7XG4gICAgcmVxdWlyZVJlc29sdmVyc0ZvclJlc29sdmVUeXBlOiBmYWxzZSxcbiAgfSxcbn0pO1xuIl19