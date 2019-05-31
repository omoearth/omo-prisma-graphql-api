"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fragmentReplacements = exports.resolvers = void 0;

var _prismaBinding = require("prisma-binding");

var _Query = require("./Query");

var _Mutation = require("./Mutation");

// import Subscription from './Subscription';
// import City from './City';
// import User from './User';
// import Votes from './Votes';
var resolvers = {
  Query: _Query.Query,
  Mutation: _Mutation.Mutation // Subscription,
  // City,
  // User,
  // Votes

};
exports.resolvers = resolvers;
var fragmentReplacements = (0, _prismaBinding.extractFragmentReplacements)(resolvers);
exports.fragmentReplacements = fragmentReplacements;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvbHZlcnMvaW5kZXgudHMiXSwibmFtZXMiOlsicmVzb2x2ZXJzIiwiUXVlcnkiLCJNdXRhdGlvbiIsImZyYWdtZW50UmVwbGFjZW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxTQUFTLEdBQUc7QUFDdkJDLEVBQUFBLEtBQUssRUFBTEEsWUFEdUI7QUFFdkJDLEVBQUFBLFFBQVEsRUFBUkEsa0JBRnVCLENBR3ZCO0FBQ0E7QUFDQTtBQUNBOztBQU51QixDQUFsQjs7QUFTQSxJQUFNQyxvQkFBb0IsR0FBRyxnREFBNEJILFNBQTVCLENBQTdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0cmFjdEZyYWdtZW50UmVwbGFjZW1lbnRzIH0gZnJvbSAncHJpc21hLWJpbmRpbmcnO1xuXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJy4vUXVlcnknO1xuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tICcuL011dGF0aW9uJztcbi8vIGltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnLi9TdWJzY3JpcHRpb24nO1xuLy8gaW1wb3J0IENpdHkgZnJvbSAnLi9DaXR5Jztcbi8vIGltcG9ydCBVc2VyIGZyb20gJy4vVXNlcic7XG4vLyBpbXBvcnQgVm90ZXMgZnJvbSAnLi9Wb3Rlcyc7XG5cbmV4cG9ydCBjb25zdCByZXNvbHZlcnMgPSB7XG4gIFF1ZXJ5LFxuICBNdXRhdGlvbixcbiAgLy8gU3Vic2NyaXB0aW9uLFxuICAvLyBDaXR5LFxuICAvLyBVc2VyLFxuICAvLyBWb3Rlc1xufTtcblxuZXhwb3J0IGNvbnN0IGZyYWdtZW50UmVwbGFjZW1lbnRzID0gZXh0cmFjdEZyYWdtZW50UmVwbGFjZW1lbnRzKHJlc29sdmVycyk7XG4iXX0=