const mongoose = require('mongoose');
const studentResult = new mongoose.Schema({
    stuClass: {
        type: String,
        require: true
    },
    regNumber: {
        type: String,
        required: true
    },
    term: {
        type: String,
        require: true
    },
    stuName: {
        type: String,
        require: true
    },
    term: {
        type: String,
        required: true
    },
    result: {
        subject_1: {
            subject: {
                type: String,
                require: true
            },
            first_Test: {
                type: Number,
                require: false
            },
            second_Test: {
                type: Number,
                reqiure: false
            },
            third_Test: {
                type: Number,
                require: false
            },
            testTotal: {
                type: Number,
                require: true
            },
            exams: {
                type: Number,
                require: false
            },
            total_score: {
                type: Number,
                require: false
            },
            grade: {
                type: String,
                require: true
            },
            remark: {
                type: String,
                require: true
            }
        },
        subject_2: {
            subject: {
                type: String,
                require: true
            },
            first_Test: {
                type: Number,
                require: false
            },
            second_Test: {
                type: Number,
                reqiure: false
            },
            third_Test: {
                type: Number,
                require: false
            },
            testTotal: {
                type: Number,
                require: true
            },
            exams: {
                type: Number,
                require: false
            },
            total_score: {
                type: Number,
                require: false
            },
            grade: {
                type: String,
                require: true
            },
            remark: {
                type: String,
                require: true
            }
        },
        subject_3: {
            subject: {
                type: String,
                require: true
            },
            first_Test: {
                type: Number,
                require: false
            },
            second_Test: {
                type: Number,
                reqiure: false
            },
            third_Test: {
                type: Number,
                require: false
            },
            testTotal: {
                type: Number,
                require: true
            },
            exams: {
                type: Number,
                require: false
            },
            total_score: {
                type: Number,
                require: false
            },
            grade: {
                type: String,
                require: true
            },
            remark: {
                type: String,
                require: true
            }
        },
        subject_4: {
            subject: {
                type: String,
                require: true
            },
            first_Test: {
                type: Number,
                require: false
            },
            second_Test: {
                type: Number,
                reqiure: false
            },
            third_Test: {
                type: Number,
                require: false
            },
            testTotal: {
                type: Number,
                require: true
            },
            exams: {
                type: Number,
                require: false
            },
            total_score: {
                type: Number,
                require: false
            },
            grade: {
                type: String,
                require: true
            },
            remark: {
                type: String,
                require: true
            }
        },
        subject_5: {
            subject: {
                type: String,
                require: true
            },
            first_Test: {
                type: Number,
                require: false
            },
            second_Test: {
                type: Number,
                reqiure: false
            },
            third_Test: {
                type: Number,
                require: false
            },
            testTotal: {
                type: Number,
                require: true
            },
            exams: {
                type: Number,
                require: false
            },
            total_score: {
                type: Number,
                require: false
            },
            grade: {
                type: String,
                require: true
            },
            remark: {
                type: String,
                require: true
            }
        },
        subject_6: {
            subject: {
                type: String,
                require: true
            },
            first_Test: {
                type: Number,
                require: false
            },
            second_Test: {
                type: Number,
                reqiure: false
            },
            third_Test: {
                type: Number,
                require: false
            },
            testTotal: {
                type: Number,
                require: true
            },
            exams: {
                type: Number,
                require: false
            },
            total_score: {
                type: Number,
                require: false
            },
            grade: {
                type: String,
                require: true
            },
            remark: {
                type: String,
                require: true
            }
        },
        subject_7: {
            subject: {
                type: String,
                require: true
            },
            first_Test: {
                type: Number,
                require: false
            },
            second_Test: {
                type: Number,
                reqiure: false
            },
            third_Test: {
                type: Number,
                require: false
            },
            testTotal: {
                type: Number,
                require: true
            },
            exams: {
                type: Number,
                require: false
            },
            total_score: {
                type: Number,
                require: false
            },
            grade: {
                type: String,
                require: true
            },
            remark: {
                type: String,
                require: true
            }
        },
        subject_8: {
            subject: {
                type: String,
                require: true
            },
            first_Test: {
                type: Number,
                require: false
            },
            second_Test: {
                type: Number,
                reqiure: false
            },
            third_Test: {
                type: Number,
                require: false
            },
            testTotal: {
                type: Number,
                require: true
            },
            exams: {
                type: Number,
                require: false
            },
            total_score: {
                type: Number,
                require: false
            },
            grade: {
                type: String,
                require: true
            },
            remark: {
                type: String,
                require: true
            }
        },
        subject_9: {
            subject: {
                type: String,
                require: true
            },
            first_Test: {
                type: Number,
                require: false
            },
            second_Test: {
                type: Number,
                reqiure: false
            },
            third_Test: {
                type: Number,
                require: false
            },
            testTotal: {
                type: Number,
                require: true
            },
            exams: {
                type: Number,
                require: false
            },
            total_score: {
                type: Number,
                require: false
            },
            grade: {
                type: String,
                require: true
            },
            remark: {
                type: String,
                require: true
            }
        }
    },
    resultCard: {
        PIN: {
            type: String,
            require: false
        },
        serial: {
            type: String,
            require: false
        }

    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Result = mongoose.model('Result', studentResult);

module.exports = Result;