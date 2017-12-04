// Day 1
const benchmark = require('./benchmark')

const input = "36743676522426214741687639282183216978128565594112364817283598621384839756628424146779311928318383597235968644687665159591573413233616717112157752469191845757712928347624726438516211153946892241449523148419426259291788938621886334734497823163281389389853675932246734153563861233894952657625868415432316155487242813798425779743561987563734944962846865263722712768674838244444385768568489842989878163655771847362656153372265945464128668412439248966939398765446171855144544285463517258749813731314365947372548811434646381595273172982466142248474238762554858654679415418693478512641864168398722199638775667744977941183772494538685398862344164521446115925528534491788728448668455349588972443295391385389551783289417349823383324748411689198219329996666752251815562522759374542652969147696419669914534586732436912798519697722586795746371697338416716842214313393228587413399534716394984183943123375517819622837972796431166264646432893478557659387795573234889141897313158457637142238315327877493994933514112645586351127139429281675912366669475931711974332271368287413985682374943195886455927839573986464555141679291998645936683639162588375974549467767623463935561847869527383395278248952314792112113126231246742753119748113828843917812547224498319849947517745625844819175973986843636628414965664466582172419197227695368492433353199233558872319529626825788288176275546566474824257336863977574347328469153319428883748696399544974133392589823343773897313173336568883385364166336362398636684459886283964242249228938383219255513996468586953519638111599935229115228837559242752925943653623682985576323929415445443378189472782454958232341986626791182861644112974418239286486722654442144851173538756859647218768134572858331849543266169672745221391659363674921469481143686952478771714585793322926824623482923579986434741714167134346384551362664177865452895348948953472328966995731169672573555621939584872187999325322327893336736611929752613241935211664248961527687778371971259654541239471766714469122213793348414477789271187324629397292446879752673"

//1069
function solveCaptcha1(input, workingString) {
  workingString = workingString || input;
  if (workingString.length === 1) {
    return input[0] === workingString ? parseInt(workingString) : 0;
  }

  var current = workingString[0]
  workingString = workingString.substr(1);
  return (current === workingString[0] ? parseInt(current) : 0) + solveCaptcha1(input, workingString);
}

console.log("Problem 1",solveCaptcha1(input));
benchmark(()=>solveCaptcha1(input));


/**
 * add up the values which have matching values `offset` values ahead where offset lookups are circular
 * 
 * @example 112314436 with offset 1 would be 5 - there is 11 and 44 which would be 1+4 = 5
 * @example 112314436 with offset 3 would be 4 - there is 1...1 and 3...3
 * 
 * @param {String} input string of single-digit integers
 * @param {Number} i starting index position
 * @param {Number} offset relative position of number to compare (circular)
 */
function solveCaptcha(input, i, offset) {
  if (i >= input.length) return 0; // you've reached the end. stop.
  return ((input[i] === input[(offset + i) % input.length]) ? parseInt(input[i]) : 0) + solveCaptcha(input, i + 1, offset);
}

console.log("Problem 1 take 2", solveCaptcha(input, 0, 1));
benchmark(() => solveCaptcha(input, 0, 1));


console.log("Problem 2", solveCaptcha(input, 0, input.length / 2));
benchmark(() => solveCaptcha(input, 0, input.length / 2));

