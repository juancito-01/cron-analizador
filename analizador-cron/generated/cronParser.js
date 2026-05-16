// Generated from cron.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import cronListener from './cronListener.js';
import cronVisitor from './cronVisitor.js';

const serializedATN = [4,1,12,69,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,5,0,21,8,0,10,0,12,0,24,9,0,1,0,
1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,34,8,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,43,
8,3,1,4,1,4,1,4,3,4,48,8,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,5,6,58,8,6,10,
6,12,6,61,9,6,1,7,1,7,3,7,65,8,7,1,8,1,8,1,8,0,0,9,0,2,4,6,8,10,12,14,16,
0,1,1,0,4,9,70,0,18,1,0,0,0,2,33,1,0,0,0,4,35,1,0,0,0,6,37,1,0,0,0,8,47,
1,0,0,0,10,52,1,0,0,0,12,54,1,0,0,0,14,64,1,0,0,0,16,66,1,0,0,0,18,22,3,
2,1,0,19,21,3,2,1,0,20,19,1,0,0,0,21,24,1,0,0,0,22,20,1,0,0,0,22,23,1,0,
0,0,23,25,1,0,0,0,24,22,1,0,0,0,25,26,5,0,0,1,26,1,1,0,0,0,27,34,3,16,8,
0,28,34,3,12,6,0,29,34,3,8,4,0,30,34,3,6,3,0,31,34,3,4,2,0,32,34,3,10,5,
0,33,27,1,0,0,0,33,28,1,0,0,0,33,29,1,0,0,0,33,30,1,0,0,0,33,31,1,0,0,0,
33,32,1,0,0,0,34,3,1,0,0,0,35,36,5,11,0,0,36,5,1,0,0,0,37,38,5,11,0,0,38,
39,5,1,0,0,39,42,5,11,0,0,40,41,5,2,0,0,41,43,5,11,0,0,42,40,1,0,0,0,42,
43,1,0,0,0,43,7,1,0,0,0,44,48,3,10,5,0,45,48,3,6,3,0,46,48,3,4,2,0,47,44,
1,0,0,0,47,45,1,0,0,0,47,46,1,0,0,0,48,49,1,0,0,0,49,50,5,2,0,0,50,51,5,
11,0,0,51,9,1,0,0,0,52,53,5,10,0,0,53,11,1,0,0,0,54,59,3,14,7,0,55,56,5,
3,0,0,56,58,3,14,7,0,57,55,1,0,0,0,58,61,1,0,0,0,59,57,1,0,0,0,59,60,1,0,
0,0,60,13,1,0,0,0,61,59,1,0,0,0,62,65,3,6,3,0,63,65,3,4,2,0,64,62,1,0,0,
0,64,63,1,0,0,0,65,15,1,0,0,0,66,67,7,0,0,0,67,17,1,0,0,0,6,22,33,42,47,
59,64];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class cronParser extends antlr4.Parser {

    static grammarFileName = "cron.g4";
    static literalNames = [ null, "'-'", "'/'", "','", "'@yearly'", "'@monthly'", 
                            "'@weekly'", "'@daily'", "'@hourly'", "'@reboot'", 
                            "'*'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "STAR", "NUMBER", "WS" ];
    static ruleNames = [ "schedule", "time_field", "value", "range", "step", 
                         "wildcard", "list", "item", "predefined" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = cronParser.ruleNames;
        this.literalNames = cronParser.literalNames;
        this.symbolicNames = cronParser.symbolicNames;
    }



	schedule() {
	    let localctx = new ScheduleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, cronParser.RULE_schedule);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.time_field();
	        this.state = 22;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4080) !== 0)) {
	            this.state = 19;
	            this.time_field();
	            this.state = 24;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 25;
	        this.match(cronParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	time_field() {
	    let localctx = new Time_fieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, cronParser.RULE_time_field);
	    try {
	        this.state = 33;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 27;
	            this.predefined();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 28;
	            this.list();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 29;
	            this.step();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 30;
	            this.range();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 31;
	            this.value();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 32;
	            this.wildcard();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, cronParser.RULE_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(cronParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	range() {
	    let localctx = new RangeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, cronParser.RULE_range);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        this.match(cronParser.NUMBER);
	        this.state = 38;
	        this.match(cronParser.T__0);
	        this.state = 39;
	        this.match(cronParser.NUMBER);
	        this.state = 42;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        if(la_===1) {
	            this.state = 40;
	            this.match(cronParser.T__1);
	            this.state = 41;
	            this.match(cronParser.NUMBER);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	step() {
	    let localctx = new StepContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, cronParser.RULE_step);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 47;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 44;
	            this.wildcard();
	            break;

	        case 2:
	            this.state = 45;
	            this.range();
	            break;

	        case 3:
	            this.state = 46;
	            this.value();
	            break;

	        }
	        this.state = 49;
	        this.match(cronParser.T__1);
	        this.state = 50;
	        this.match(cronParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	wildcard() {
	    let localctx = new WildcardContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, cronParser.RULE_wildcard);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(cronParser.STAR);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	list() {
	    let localctx = new ListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, cronParser.RULE_list);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.item();
	        this.state = 59;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 55;
	            this.match(cronParser.T__2);
	            this.state = 56;
	            this.item();
	            this.state = 61;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	item() {
	    let localctx = new ItemContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, cronParser.RULE_item);
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 62;
	            this.range();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 63;
	            this.value();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	predefined() {
	    let localctx = new PredefinedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, cronParser.RULE_predefined);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1008) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

cronParser.EOF = antlr4.Token.EOF;
cronParser.T__0 = 1;
cronParser.T__1 = 2;
cronParser.T__2 = 3;
cronParser.T__3 = 4;
cronParser.T__4 = 5;
cronParser.T__5 = 6;
cronParser.T__6 = 7;
cronParser.T__7 = 8;
cronParser.T__8 = 9;
cronParser.STAR = 10;
cronParser.NUMBER = 11;
cronParser.WS = 12;

cronParser.RULE_schedule = 0;
cronParser.RULE_time_field = 1;
cronParser.RULE_value = 2;
cronParser.RULE_range = 3;
cronParser.RULE_step = 4;
cronParser.RULE_wildcard = 5;
cronParser.RULE_list = 6;
cronParser.RULE_item = 7;
cronParser.RULE_predefined = 8;

class ScheduleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cronParser.RULE_schedule;
    }

	time_field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Time_fieldContext);
	    } else {
	        return this.getTypedRuleContext(Time_fieldContext,i);
	    }
	};

	EOF() {
	    return this.getToken(cronParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.enterSchedule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.exitSchedule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof cronVisitor ) {
	        return visitor.visitSchedule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Time_fieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cronParser.RULE_time_field;
    }

	predefined() {
	    return this.getTypedRuleContext(PredefinedContext,0);
	};

	list() {
	    return this.getTypedRuleContext(ListContext,0);
	};

	step() {
	    return this.getTypedRuleContext(StepContext,0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	wildcard() {
	    return this.getTypedRuleContext(WildcardContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.enterTime_field(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.exitTime_field(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof cronVisitor ) {
	        return visitor.visitTime_field(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cronParser.RULE_value;
    }

	NUMBER() {
	    return this.getToken(cronParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof cronVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RangeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cronParser.RULE_range;
    }

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(cronParser.NUMBER);
	    } else {
	        return this.getToken(cronParser.NUMBER, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.enterRange(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.exitRange(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof cronVisitor ) {
	        return visitor.visitRange(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StepContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cronParser.RULE_step;
    }

	NUMBER() {
	    return this.getToken(cronParser.NUMBER, 0);
	};

	wildcard() {
	    return this.getTypedRuleContext(WildcardContext,0);
	};

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.enterStep(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.exitStep(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof cronVisitor ) {
	        return visitor.visitStep(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WildcardContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cronParser.RULE_wildcard;
    }

	STAR() {
	    return this.getToken(cronParser.STAR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.enterWildcard(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.exitWildcard(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof cronVisitor ) {
	        return visitor.visitWildcard(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cronParser.RULE_list;
    }

	item = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ItemContext);
	    } else {
	        return this.getTypedRuleContext(ItemContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.enterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.exitList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof cronVisitor ) {
	        return visitor.visitList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ItemContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cronParser.RULE_item;
    }

	range() {
	    return this.getTypedRuleContext(RangeContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.enterItem(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.exitItem(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof cronVisitor ) {
	        return visitor.visitItem(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PredefinedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = cronParser.RULE_predefined;
    }


	enterRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.enterPredefined(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof cronListener ) {
	        listener.exitPredefined(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof cronVisitor ) {
	        return visitor.visitPredefined(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




cronParser.ScheduleContext = ScheduleContext; 
cronParser.Time_fieldContext = Time_fieldContext; 
cronParser.ValueContext = ValueContext; 
cronParser.RangeContext = RangeContext; 
cronParser.StepContext = StepContext; 
cronParser.WildcardContext = WildcardContext; 
cronParser.ListContext = ListContext; 
cronParser.ItemContext = ItemContext; 
cronParser.PredefinedContext = PredefinedContext; 
