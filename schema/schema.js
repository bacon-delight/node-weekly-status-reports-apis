const graphql = require('graphql');
//const _ = require('lodash');

// Import Models
const Holiday = require('../models/holiday');
const Archive1 = require('../models/archive1');
const Archive2 = require('../models/archive2');

const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull
} = graphql;

const HolidayType = new GraphQLObjectType({
	name: 'Holiday',
	fields: () => ({
		id: {type: GraphQLID},
		date: {type: GraphQLString},
		comment: {type: GraphQLString},
		userId: {type: GraphQLString}
	})
});

const Archive1Type = new GraphQLObjectType({
	name: 'Archive1',
	fields: () => ({
		id: {type: GraphQLID},
		userId: {type: GraphQLString},
		weekstart: {type: GraphQLString},
		weekend: {type: GraphQLString},
		distribution: {type: GraphQLString},
		project: {type: GraphQLString},
		accomplishments: {type: GraphQLString},
		plans: {type: GraphQLString},
		issues: {type: GraphQLString},
		bh: {type: GraphQLString},
		nbh: {type: GraphQLString},
		expenses: {type: GraphQLString},
		expensesNext: {type: GraphQLString}
	})
});

const Archive2Type = new GraphQLObjectType({
	name: 'Archive2',
	fields: () => ({
		id: {type: GraphQLID},
		userId: {type: GraphQLString},
		year: {type: GraphQLString},
		weekNumber: {type: GraphQLString},
		weekEnding: {type: GraphQLString},
		primary: {type: GraphQLString},
		secondary: {type: GraphQLString},
		clientRegion: {type: GraphQLString},
		client: {type: GraphQLString},
		projectProduct: {type: GraphQLString},
		projectName: {type: GraphQLString},
		projectActivity: {type: GraphQLString},
		status: {type: GraphQLString},
		phase: {type: GraphQLString},
		projectManager: {type: GraphQLString},
		date1: {type: GraphQLString},
		date2: {type: GraphQLString},
		date3: {type: GraphQLString},
		date4: {type: GraphQLString},
		date5: {type: GraphQLString},
		date6: {type: GraphQLString},
		date7: {type: GraphQLString},
		date8: {type: GraphQLString},
		date9: {type: GraphQLString},
		timeEntry: {type: GraphQLString},
		opemEms: {type: GraphQLString},
		totalBilled: {type: GraphQLString},
		comments: {type: GraphQLString}
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		allHolidays: {
			type: new GraphQLList(HolidayType),
			resolve(parent, args) {
				return Holiday.find({});
			}
		},
		allArchive1s: {
			type: new GraphQLList(Archive1Type),
			resolve(parent, args) {
				return Archive1.find({});
			}
		},
		allArchive2s: {
			type: new GraphQLList(Archive2Type),
			resolve(parent, args) {
				return Archive2.find({});
			}
		},
		userHolidays: {
			type: new GraphQLList(HolidayType),
			args: {
				userId: {
					type: GraphQLString
				}
			},
			resolve(parent, args) {
				return Holiday.find({
					userId: args.userId
				});
			}
		},
		userArchive1s: {
			type: new GraphQLList(Archive1Type),
			args: {
				userId: {
					type: GraphQLString
				}
			},
			resolve(parent, args) {
				return Archive1.find({
					userId: args.userId
				});
			}
		},
		userArchive2s: {
			type: new GraphQLList(Archive2Type),
			args: {
				userId: {
					type: GraphQLString
				}
			},
			resolve(parent, args) {
				return Archive2.find({
					userId: args.userId
				});
			}
		}
	}
});

const Mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {
		addHoliday: {
			type: HolidayType,
			args: {
				date: {
					type: new GraphQLNonNull(GraphQLString)
				},
				comment: {
					type: new GraphQLNonNull(GraphQLString)
				},
				userId: {
					type: new GraphQLNonNull(GraphQLString)
				}
			},
			resolve(parent, args) {
				let holiday = new Holiday({
					date: args.date,
					comment: args.comment,
					userId: args.userId
				});
				return holiday.save();
			}
		},
		addArchive1: {
			type: Archive1Type,
			args: {
				userId: {
					type: new GraphQLNonNull(GraphQLString)
				},
				weekstart: {
					type: GraphQLString
				},
				weekend: {
					type: GraphQLString
				},
				distribution: {
					type: GraphQLString
				},
				project: {
					type: GraphQLString
				},
				accomplishments: {
					type: GraphQLString
				},
				plans: {
					type: GraphQLString
				},
				issues: {
					type: GraphQLString
				},
				bh: {
					type: GraphQLString
				},
				nbh: {
					type: GraphQLString
				},
				expenses: {
					type: GraphQLString
				},
				expensesNext: {
					type: GraphQLString
				}
			},
			resolve(parent, args) {
				let archive1 = new Archive1({
					userId: args.userId,
					weekstart: args.weekstart,
					weekend: args.weekend,
					distribution: args.distribution,
					project: args.project,
					accomplishments: args.accomplishments,
					plans: args.plans,
					issues: args.issues,
					bh: args.bh,
					nbh: args.nbh,
					expenses: args.expenses,
					expensesNext: args.expensesNext
				});
				return archive1.save();
			}
		},
		addArchive2: {
			type: Archive2Type,
			args: {
				userId: {
					type: new GraphQLNonNull(GraphQLString)
				},
				year: {
					type: GraphQLString
				},
				weekNumber: {
					type: GraphQLString
				},
				weekEnding: {
					type: GraphQLString
				},
				primary: {
					type: GraphQLString
				},
				secondary: {
					type: GraphQLString
				},
				clientRegion: {
					type: GraphQLString
				},
				client: {
					type: GraphQLString
				},
				projectProduct: {
					type: GraphQLString
				},
				projectName: {
					type: GraphQLString
				},
				projectActivity: {
					type: GraphQLString
				},
				status: {
					type: GraphQLString
				},
				phase: {
					type: GraphQLString
				},
				projectManager: {
					type: GraphQLString
				},
				date1: {
					type: GraphQLString
				},
				date2: {
					type: GraphQLString
				},
				date3: {
					type: GraphQLString
				},
				date4: {
					type: GraphQLString
				},
				date5: {
					type: GraphQLString
				},
				date6: {
					type: GraphQLString
				},
				date7: {
					type: GraphQLString
				},
				date8: {
					type: GraphQLString
				},
				date9: {
					type: GraphQLString
				},
				timeEntry: {
					type: GraphQLString
				},
				opemEms: {
					type: GraphQLString
				},
				totalBilled: {
					type: GraphQLString
				},
				comments: {
					type: GraphQLString
				}
			},
			resolve(parent, args) {
				let archive2 = new Archive2({
					userId: args.userId,
					year: args.year,
					weekNumber: args.weekNumber,
					weekEnding: args.weekEnding,
					primary: args.primary,
					secondary: args.secondary,
					clientRegion: args.clientRegion,
					client: args.client,
					projectProduct: args.projectProduct,
					projectName: args.projectName,
					projectActivity: args.projectActivity,
					status: args.status,
					phase: args.phase,
					projectManager: args.projectManager,
					date1: args.date1,
					date2: args.date2,
					date3: args.date3,
					date4: args.date4,
					date5: args.date5,
					date6: args.date6,
					date7: args.date7,
					date8: args.date8,
					date9: args.date9,
					timeEntry: args.timeEntry,
					opemEms: args.opemEms,
					totalBilled: args.totalBilled,
					comments: args.comments
				});
				return archive2.save();
			}
		}
	}
});

module.exports = new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
});