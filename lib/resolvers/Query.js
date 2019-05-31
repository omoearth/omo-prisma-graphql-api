"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Query = void 0;
var Query = {
  currentUser: function currentUser(_parent, _args, _ref) {
    var user = _ref.user,
        prisma = _ref.prisma;

    if (!user) {
      throw new Error('Not Authenticated');
    }

    return prisma.user({
      id: user.id
    });
  }
}; // UserClaims: (parent, {
//   email
// }, {
//   prisma
// }) => {
//   let claims = prisma.users(where: {
//     email: $email
//   })
//   {
//     roles {
//       claims {
//         name
//       }
//     }
//   };
//   console.log(claims);
//   return claims;
// }
// users(parent, { first, skip, after, orderBy, filter }, { prisma }, info) {
//     const args = {
//         skip,
//         first,
//         after,
//         orderBy
//     }
//     if (filter) {
//         args.where = {
//             OR: [{
//                 name_contains: filter
//             }]
//         }
//     }
//     return prisma.query.users(args, info)
// },
// cities(parent, { skip, first, after, orderBy, filter }, { prisma }, info) {
//     const args = {
//         skip,
//         first,
//         after,
//         orderBy,
//         where: {
//             available: true
//         }
//     }
//     if (filter) {
//         args.where.OR = [{
//             name_contains: filter
//         }]
//     }
//     return prisma.query.cities(args, info)
// },
// me(parent, { id }, { prisma, request }, info) {
//     const userId = getUserId(request)
//     return prisma.query.user({
//         where: {
//             id: userId
//         }
//     }, info)
// },
// async city(parent, { id }, { prisma, request }, info) {
//     const userId = getUserId(request, false)
//     const cities = await prisma.query.cities({
//         where: {
//             id,
//             OR: [{
//                 available: true
//             }, {
//                 author: {
//                     id: userId
//                 }
//             }]
//         }
//     }, info)
//     if(cities.length === 0){
//         throw new Error("no city found")
//     }
//     return cities[0]
// }

exports.Query = Query;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXNvbHZlcnMvUXVlcnkudHMiXSwibmFtZXMiOlsiUXVlcnkiLCJjdXJyZW50VXNlciIsIl9wYXJlbnQiLCJfYXJncyIsInVzZXIiLCJwcmlzbWEiLCJFcnJvciIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxJQUFNQSxLQUFLLEdBQUc7QUFDbkJDLEVBQUFBLFdBQVcsRUFBRSxxQkFBQ0MsT0FBRCxFQUFlQyxLQUFmLFFBQXFEO0FBQUEsUUFBeEJDLElBQXdCLFFBQXhCQSxJQUF3QjtBQUFBLFFBQWxCQyxNQUFrQixRQUFsQkEsTUFBa0I7O0FBQ2hFLFFBQUksQ0FBQ0QsSUFBTCxFQUFXO0FBQ1QsWUFBTSxJQUFJRSxLQUFKLENBQVUsbUJBQVYsQ0FBTjtBQUNEOztBQUNELFdBQU9ELE1BQU0sQ0FBQ0QsSUFBUCxDQUFZO0FBQ2pCRyxNQUFBQSxFQUFFLEVBQUVILElBQUksQ0FBQ0c7QUFEUSxLQUFaLENBQVA7QUFHRDtBQVJrQixDQUFkLEMsQ0FVUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgUXVlcnkgPSB7XG4gIGN1cnJlbnRVc2VyOiAoX3BhcmVudDogYW55LCBfYXJnczogYW55LCB7IHVzZXIsIHByaXNtYSB9OiBhbnkpID0+IHtcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90IEF1dGhlbnRpY2F0ZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHByaXNtYS51c2VyKHtcbiAgICAgIGlkOiB1c2VyLmlkLFxuICAgIH0pO1xuICB9LFxufTtcbi8vIFVzZXJDbGFpbXM6IChwYXJlbnQsIHtcbi8vICAgZW1haWxcbi8vIH0sIHtcbi8vICAgcHJpc21hXG4vLyB9KSA9PiB7XG5cbi8vICAgbGV0IGNsYWltcyA9IHByaXNtYS51c2Vycyh3aGVyZToge1xuLy8gICAgIGVtYWlsOiAkZW1haWxcbi8vICAgfSlcblxuLy8gICB7XG4vLyAgICAgcm9sZXMge1xuLy8gICAgICAgY2xhaW1zIHtcbi8vICAgICAgICAgbmFtZVxuLy8gICAgICAgfVxuLy8gICAgIH1cbi8vICAgfTtcbi8vICAgY29uc29sZS5sb2coY2xhaW1zKTtcbi8vICAgcmV0dXJuIGNsYWltcztcblxuLy8gfVxuXG4vLyB1c2VycyhwYXJlbnQsIHsgZmlyc3QsIHNraXAsIGFmdGVyLCBvcmRlckJ5LCBmaWx0ZXIgfSwgeyBwcmlzbWEgfSwgaW5mbykge1xuLy8gICAgIGNvbnN0IGFyZ3MgPSB7XG4vLyAgICAgICAgIHNraXAsXG4vLyAgICAgICAgIGZpcnN0LFxuLy8gICAgICAgICBhZnRlcixcbi8vICAgICAgICAgb3JkZXJCeVxuLy8gICAgIH1cblxuLy8gICAgIGlmIChmaWx0ZXIpIHtcbi8vICAgICAgICAgYXJncy53aGVyZSA9IHtcbi8vICAgICAgICAgICAgIE9SOiBbe1xuLy8gICAgICAgICAgICAgICAgIG5hbWVfY29udGFpbnM6IGZpbHRlclxuLy8gICAgICAgICAgICAgfV1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgIHJldHVybiBwcmlzbWEucXVlcnkudXNlcnMoYXJncywgaW5mbylcbi8vIH0sXG5cbi8vIGNpdGllcyhwYXJlbnQsIHsgc2tpcCwgZmlyc3QsIGFmdGVyLCBvcmRlckJ5LCBmaWx0ZXIgfSwgeyBwcmlzbWEgfSwgaW5mbykge1xuLy8gICAgIGNvbnN0IGFyZ3MgPSB7XG4vLyAgICAgICAgIHNraXAsXG4vLyAgICAgICAgIGZpcnN0LFxuLy8gICAgICAgICBhZnRlcixcbi8vICAgICAgICAgb3JkZXJCeSxcbi8vICAgICAgICAgd2hlcmU6IHtcbi8vICAgICAgICAgICAgIGF2YWlsYWJsZTogdHJ1ZVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGlmIChmaWx0ZXIpIHtcbi8vICAgICAgICAgYXJncy53aGVyZS5PUiA9IFt7XG4vLyAgICAgICAgICAgICBuYW1lX2NvbnRhaW5zOiBmaWx0ZXJcbi8vICAgICAgICAgfV1cbi8vICAgICB9XG4vLyAgICAgcmV0dXJuIHByaXNtYS5xdWVyeS5jaXRpZXMoYXJncywgaW5mbylcbi8vIH0sXG5cbi8vIG1lKHBhcmVudCwgeyBpZCB9LCB7IHByaXNtYSwgcmVxdWVzdCB9LCBpbmZvKSB7XG4vLyAgICAgY29uc3QgdXNlcklkID0gZ2V0VXNlcklkKHJlcXVlc3QpXG4vLyAgICAgcmV0dXJuIHByaXNtYS5xdWVyeS51c2VyKHtcbi8vICAgICAgICAgd2hlcmU6IHtcbi8vICAgICAgICAgICAgIGlkOiB1c2VySWRcbi8vICAgICAgICAgfVxuLy8gICAgIH0sIGluZm8pXG4vLyB9LFxuXG4vLyBhc3luYyBjaXR5KHBhcmVudCwgeyBpZCB9LCB7IHByaXNtYSwgcmVxdWVzdCB9LCBpbmZvKSB7XG4vLyAgICAgY29uc3QgdXNlcklkID0gZ2V0VXNlcklkKHJlcXVlc3QsIGZhbHNlKVxuLy8gICAgIGNvbnN0IGNpdGllcyA9IGF3YWl0IHByaXNtYS5xdWVyeS5jaXRpZXMoe1xuLy8gICAgICAgICB3aGVyZToge1xuLy8gICAgICAgICAgICAgaWQsXG4vLyAgICAgICAgICAgICBPUjogW3tcbi8vICAgICAgICAgICAgICAgICBhdmFpbGFibGU6IHRydWVcbi8vICAgICAgICAgICAgIH0sIHtcbi8vICAgICAgICAgICAgICAgICBhdXRob3I6IHtcbi8vICAgICAgICAgICAgICAgICAgICAgaWQ6IHVzZXJJZFxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1dXG4vLyAgICAgICAgIH1cbi8vICAgICB9LCBpbmZvKVxuLy8gICAgIGlmKGNpdGllcy5sZW5ndGggPT09IDApe1xuLy8gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJubyBjaXR5IGZvdW5kXCIpXG4vLyAgICAgfVxuLy8gICAgIHJldHVybiBjaXRpZXNbMF1cbi8vIH1cbiJdfQ==