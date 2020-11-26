        var depends = [
        
{ data: { id: "cluster_fingroup", name: "fingroup" } },
{ data: { id: "cluster_fingroup_plus", name: "+", parent: "cluster_fingroup" } },
{ data: { id: "presentation", name: "presentation", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "fingroup", name: "fingroup", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "quotient", name: "quotient", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "morphism", name: "morphism", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "gproduct", name: "gproduct", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "all_fingroup", name: "all_fingroup", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "perm", name: "perm", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "action", name: "action", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "automorphism", name: "automorphism", parent: "cluster_fingroup", released: "no" } },
{ data: { id: "cluster_algebra", name: "algebra" } },
{ data: { id: "cluster_algebra_plus", name: "+", parent: "cluster_algebra" } },
{ data: { id: "polyXY", name: "polyXY", parent: "cluster_algebra", released: "no" } },
{ data: { id: "interval", name: "interval", parent: "cluster_algebra", released: "no" } },
{ data: { id: "polydiv", name: "polydiv", parent: "cluster_algebra", released: "no" } },
{ data: { id: "intdiv", name: "intdiv", parent: "cluster_algebra", released: "no" } },
{ data: { id: "finalg", name: "finalg", parent: "cluster_algebra", released: "no" } },
{ data: { id: "mxpoly", name: "mxpoly", parent: "cluster_algebra", released: "no" } },
{ data: { id: "ssrnum", name: "ssrnum", parent: "cluster_algebra", released: "no" } },
{ data: { id: "poly", name: "poly", parent: "cluster_algebra", released: "no" } },
{ data: { id: "ring_quotient", name: "ring_quotient", parent: "cluster_algebra", released: "no" } },
{ data: { id: "ssrint", name: "ssrint", parent: "cluster_algebra", released: "no" } },
{ data: { id: "countalg", name: "countalg", parent: "cluster_algebra", released: "no" } },
{ data: { id: "mxalgebra", name: "mxalgebra", parent: "cluster_algebra", released: "no" } },
{ data: { id: "matrix", name: "matrix", parent: "cluster_algebra", released: "no" } },
{ data: { id: "all_algebra", name: "all_algebra", parent: "cluster_algebra", released: "no" } },
{ data: { id: "zmodp", name: "zmodp", parent: "cluster_algebra", released: "no" } },
{ data: { id: "fraction", name: "fraction", parent: "cluster_algebra", released: "no" } },
{ data: { id: "ssralg", name: "ssralg", parent: "cluster_algebra", released: "no" } },
{ data: { id: "vector", name: "vector", parent: "cluster_algebra", released: "no" } },
{ data: { id: "rat", name: "rat", parent: "cluster_algebra", released: "no" } },
{ data: { id: "cluster_all", name: "all" } },
{ data: { id: "cluster_all_plus", name: "+", parent: "cluster_all" } },
{ data: { id: "all", name: "all", parent: "cluster_all", released: "no" } },
{ data: { id: "cluster_ssreflect", name: "ssreflect" } },
{ data: { id: "cluster_ssreflect_plus", name: "+", parent: "cluster_ssreflect" } },
{ data: { id: "eqtype", name: "eqtype", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "ssrnotations", name: "ssrnotations", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "fingraph", name: "fingraph", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "finfun", name: "finfun", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "div", name: "div", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "all_ssreflect", name: "all_ssreflect", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "ssrnat", name: "ssrnat", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "choice", name: "choice", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "seq", name: "seq", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "ssrmatching", name: "ssrmatching", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "binomial", name: "binomial", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "ssreflect", name: "ssreflect", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "bigop", name: "bigop", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "path", name: "path", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "ssrbool", name: "ssrbool", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "generic_quotient", name: "generic_quotient", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "order", name: "order", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "prime", name: "prime", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "finset", name: "finset", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "tuple", name: "tuple", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "ssrfun", name: "ssrfun", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "ssrAC", name: "ssrAC", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "fintype", name: "fintype", parent: "cluster_ssreflect", released: "no" } },
{ data: { id: "cluster_solvable", name: "solvable" } },
{ data: { id: "cluster_solvable_plus", name: "+", parent: "cluster_solvable" } },
{ data: { id: "center", name: "center", parent: "cluster_solvable", released: "no" } },
{ data: { id: "nilpotent", name: "nilpotent", parent: "cluster_solvable", released: "no" } },
{ data: { id: "frobenius", name: "frobenius", parent: "cluster_solvable", released: "no" } },
{ data: { id: "pgroup", name: "pgroup", parent: "cluster_solvable", released: "no" } },
{ data: { id: "jordanholder", name: "jordanholder", parent: "cluster_solvable", released: "no" } },
{ data: { id: "extraspecial", name: "extraspecial", parent: "cluster_solvable", released: "no" } },
{ data: { id: "burnside_app", name: "burnside_app", parent: "cluster_solvable", released: "no" } },
{ data: { id: "hall", name: "hall", parent: "cluster_solvable", released: "no" } },
{ data: { id: "gseries", name: "gseries", parent: "cluster_solvable", released: "no" } },
{ data: { id: "commutator", name: "commutator", parent: "cluster_solvable", released: "no" } },
{ data: { id: "primitive_action", name: "primitive_action", parent: "cluster_solvable", released: "no" } },
{ data: { id: "sylow", name: "sylow", parent: "cluster_solvable", released: "no" } },
{ data: { id: "extremal", name: "extremal", parent: "cluster_solvable", released: "no" } },
{ data: { id: "abelian", name: "abelian", parent: "cluster_solvable", released: "no" } },
{ data: { id: "finmodule", name: "finmodule", parent: "cluster_solvable", released: "no" } },
{ data: { id: "cyclic", name: "cyclic", parent: "cluster_solvable", released: "no" } },
{ data: { id: "gfunctor", name: "gfunctor", parent: "cluster_solvable", released: "no" } },
{ data: { id: "maximal", name: "maximal", parent: "cluster_solvable", released: "no" } },
{ data: { id: "alt", name: "alt", parent: "cluster_solvable", released: "no" } },
{ data: { id: "all_solvable", name: "all_solvable", parent: "cluster_solvable", released: "no" } },
{ data: { id: "cluster_character", name: "character" } },
{ data: { id: "cluster_character_plus", name: "+", parent: "cluster_character" } },
{ data: { id: "inertia", name: "inertia", parent: "cluster_character", released: "no" } },
{ data: { id: "all_character", name: "all_character", parent: "cluster_character", released: "no" } },
{ data: { id: "vcharacter", name: "vcharacter", parent: "cluster_character", released: "no" } },
{ data: { id: "character", name: "character", parent: "cluster_character", released: "no" } },
{ data: { id: "mxabelem", name: "mxabelem", parent: "cluster_character", released: "no" } },
{ data: { id: "mxrepresentation", name: "mxrepresentation", parent: "cluster_character", released: "no" } },
{ data: { id: "integral_char", name: "integral_char", parent: "cluster_character", released: "no" } },
{ data: { id: "classfun", name: "classfun", parent: "cluster_character", released: "no" } },
{ data: { id: "cluster_field", name: "field" } },
{ data: { id: "cluster_field_plus", name: "+", parent: "cluster_field" } },
{ data: { id: "galois", name: "galois", parent: "cluster_field", released: "no" } },
{ data: { id: "separable", name: "separable", parent: "cluster_field", released: "no" } },
{ data: { id: "all_field", name: "all_field", parent: "cluster_field", released: "no" } },
{ data: { id: "cyclotomic", name: "cyclotomic", parent: "cluster_field", released: "no" } },
{ data: { id: "algnum", name: "algnum", parent: "cluster_field", released: "no" } },
{ data: { id: "falgebra", name: "falgebra", parent: "cluster_field", released: "no" } },
{ data: { id: "algebraics_fundamentals", name: "algebraics_fundamentals", parent: "cluster_field", released: "no" } },
{ data: { id: "finfield", name: "finfield", parent: "cluster_field", released: "no" } },
{ data: { id: "algC", name: "algC", parent: "cluster_field", released: "no" } },
{ data: { id: "closed_field", name: "closed_field", parent: "cluster_field", released: "no" } },
{ data: { id: "fieldext", name: "fieldext", parent: "cluster_field", released: "no" } },
{ data: { id: "edge0", source: "separable", target: "fieldext" } },
{ data: { id: "edge1", source: "gseries", target: "center" } },
{ data: { id: "edge2", source: "mxrepresentation", target: "center" } },
{ data: { id: "edge3", source: "sylow", target: "nilpotent" } },
{ data: { id: "edge4", source: "mxpoly", target: "polydiv" } },
{ data: { id: "edge5", source: "fraction", target: "polydiv" } },
{ data: { id: "edge6", source: "intdiv", target: "polydiv" } },
{ data: { id: "edge7", source: "fieldext", target: "mxpoly" } },
{ data: { id: "edge8", source: "polyXY", target: "mxpoly" } },
{ data: { id: "edge9", source: "mxrepresentation", target: "mxpoly" } },
{ data: { id: "edge10", source: "closed_field", target: "mxpoly" } },
{ data: { id: "edge11", source: "all", target: "all_ssreflect" } },
{ data: { id: "edge12", source: "seq", target: "ssrnat" } },
{ data: { id: "edge13", source: "algebraics_fundamentals", target: "galois" } },
{ data: { id: "edge14", source: "ssrnum", target: "fingroup" } },
{ data: { id: "edge15", source: "morphism", target: "fingroup" } },
{ data: { id: "edge16", source: "alt", target: "primitive_action" } },
{ data: { id: "edge17", source: "burnside_app", target: "primitive_action" } },
{ data: { id: "edge18", source: "finmodule", target: "commutator" } },
{ data: { id: "edge19", source: "gseries", target: "commutator" } },
{ data: { id: "edge20", source: "mxrepresentation", target: "commutator" } },
{ data: { id: "edge21", source: "fingroup", target: "finset" } },
{ data: { id: "edge22", source: "binomial", target: "finset" } },
{ data: { id: "edge23", source: "order", target: "finset" } },
{ data: { id: "edge24", source: "eqtype", target: "ssrbool" } },
{ data: { id: "edge25", source: "fingroup", target: "prime" } },
{ data: { id: "edge26", source: "binomial", target: "prime" } },
{ data: { id: "edge27", source: "order", target: "prime" } },
{ data: { id: "edge28", source: "character", target: "abelian" } },
{ data: { id: "edge29", source: "finfield", target: "abelian" } },
{ data: { id: "edge30", source: "maximal", target: "abelian" } },
{ data: { id: "edge31", source: "all_algebra", target: "fraction" } },
{ data: { id: "edge32", source: "all_ssreflect", target: "binomial" } },
{ data: { id: "edge33", source: "perm", target: "binomial" } },
{ data: { id: "edge34", source: "ssralg", target: "binomial" } },
{ data: { id: "edge35", source: "all_ssreflect", target: "ssrAC" } },
{ data: { id: "edge36", source: "fraction", target: "ssrAC" } },
{ data: { id: "edge37", source: "ssrnum", target: "ssrAC" } },
{ data: { id: "edge38", source: "ssrnat", target: "eqtype" } },
{ data: { id: "edge39", source: "all_algebra", target: "intdiv" } },
{ data: { id: "edge40", source: "algebraics_fundamentals", target: "intdiv" } },
{ data: { id: "edge41", source: "bigop", target: "finfun" } },
{ data: { id: "edge42", source: "character", target: "classfun" } },
{ data: { id: "edge43", source: "polydiv", target: "poly" } },
{ data: { id: "edge44", source: "cyclic", target: "poly" } },
{ data: { id: "edge45", source: "ssrnum", target: "poly" } },
{ data: { id: "edge46", source: "falgebra", target: "poly" } },
{ data: { id: "edge47", source: "extremal", target: "presentation" } },
{ data: { id: "edge48", source: "all_fingroup", target: "presentation" } },
{ data: { id: "edge49", source: "all_character", target: "inertia" } },
{ data: { id: "edge50", source: "frobenius", target: "hall" } },
{ data: { id: "edge51", source: "center", target: "cyclic" } },
{ data: { id: "edge52", source: "finmodule", target: "cyclic" } },
{ data: { id: "edge53", source: "separable", target: "cyclic" } },
{ data: { id: "edge54", source: "pgroup", target: "cyclic" } },
{ data: { id: "edge55", source: "vcharacter", target: "integral_char" } },
{ data: { id: "edge56", source: "ssrbool", target: "ssrfun" } },
{ data: { id: "edge57", source: "all_solvable", target: "alt" } },
{ data: { id: "edge58", source: "fingraph", target: "fintype" } },
{ data: { id: "edge59", source: "generic_quotient", target: "fintype" } },
{ data: { id: "edge60", source: "tuple", target: "fintype" } },
{ data: { id: "edge61", source: "all_ssreflect", target: "order" } },
{ data: { id: "edge62", source: "ssrnum", target: "order" } },
{ data: { id: "edge63", source: "all", target: "all_character" } },
{ data: { id: "edge64", source: "inertia", target: "character" } },
{ data: { id: "edge65", source: "integral_char", target: "character" } },
{ data: { id: "edge66", source: "cyclic", target: "zmodp" } },
{ data: { id: "edge67", source: "matrix", target: "zmodp" } },
{ data: { id: "edge68", source: "ssrfun", target: "ssrnotations" } },
{ data: { id: "edge69", source: "all_ssreflect", target: "fingraph" } },
{ data: { id: "edge70", source: "all_field", target: "finfield" } },
{ data: { id: "edge71", source: "ssrint", target: "ssrnum" } },
{ data: { id: "edge72", source: "interval", target: "ssrnum" } },
{ data: { id: "edge73", source: "all_solvable", target: "burnside_app" } },
{ data: { id: "edge74", source: "all_solvable", target: "jordanholder" } },
{ data: { id: "edge75", source: "maximal", target: "finmodule" } },
{ data: { id: "edge76", source: "extraspecial", target: "extremal" } },
{ data: { id: "edge77", source: "all_solvable", target: "extraspecial" } },
{ data: { id: "edge78", source: "center", target: "gfunctor" } },
{ data: { id: "edge79", source: "commutator", target: "gfunctor" } },
{ data: { id: "edge80", source: "pgroup", target: "gfunctor" } },
{ data: { id: "edge81", source: "ssrfun", target: "ssreflect" } },
{ data: { id: "edge82", source: "rat", target: "ssrint" } },
{ data: { id: "edge83", source: "fintype", target: "path" } },
{ data: { id: "edge84", source: "finfield", target: "cyclotomic" } },
{ data: { id: "edge85", source: "algnum", target: "cyclotomic" } },
{ data: { id: "edge86", source: "all_ssreflect", target: "generic_quotient" } },
{ data: { id: "edge87", source: "ring_quotient", target: "generic_quotient" } },
{ data: { id: "edge88", source: "extremal", target: "matrix" } },
{ data: { id: "edge89", source: "mxalgebra", target: "matrix" } },
{ data: { id: "edge90", source: "all", target: "all_algebra" } },
{ data: { id: "edge91", source: "algC", target: "algebraics_fundamentals" } },
{ data: { id: "edge92", source: "automorphism", target: "perm" } },
{ data: { id: "edge93", source: "galois", target: "separable" } },
{ data: { id: "edge94", source: "poly", target: "countalg" } },
{ data: { id: "edge95", source: "finalg", target: "countalg" } },
{ data: { id: "edge96", source: "hall", target: "maximal" } },
{ data: { id: "edge97", source: "extremal", target: "maximal" } },
{ data: { id: "edge98", source: "mxabelem", target: "maximal" } },
{ data: { id: "edge99", source: "nilpotent", target: "gseries" } },
{ data: { id: "edge100", source: "primitive_action", target: "gseries" } },
{ data: { id: "edge101", source: "jordanholder", target: "gseries" } },
{ data: { id: "edge102", source: "all_character", target: "vcharacter" } },
{ data: { id: "edge103", source: "all_algebra", target: "interval" } },
{ data: { id: "edge104", source: "inertia", target: "frobenius" } },
{ data: { id: "edge105", source: "vcharacter", target: "frobenius" } },
{ data: { id: "edge106", source: "all_solvable", target: "frobenius" } },
{ data: { id: "edge107", source: "cyclotomic", target: "algC" } },
{ data: { id: "edge108", source: "sylow", target: "pgroup" } },
{ data: { id: "edge109", source: "mxrepresentation", target: "pgroup" } },
{ data: { id: "edge110", source: "all_algebra", target: "polyXY" } },
{ data: { id: "edge111", source: "separable", target: "polyXY" } },
{ data: { id: "edge112", source: "intdiv", target: "vector" } },
{ data: { id: "edge113", source: "falgebra", target: "vector" } },
{ data: { id: "edge114", source: "classfun", target: "algnum" } },
{ data: { id: "edge115", source: "all_field", target: "algnum" } },
{ data: { id: "edge116", source: "cyclic", target: "gproduct" } },
{ data: { id: "edge117", source: "gfunctor", target: "gproduct" } },
{ data: { id: "edge118", source: "all_fingroup", target: "gproduct" } },
{ data: { id: "edge119", source: "all", target: "all_fingroup" } },
{ data: { id: "edge120", source: "bigop", target: "div" } },
{ data: { id: "edge121", source: "abelian", target: "sylow" } },
{ data: { id: "edge122", source: "alt", target: "sylow" } },
{ data: { id: "edge123", source: "algebraics_fundamentals", target: "sylow" } },
{ data: { id: "edge124", source: "gproduct", target: "action" } },
{ data: { id: "edge125", source: "finalg", target: "action" } },
{ data: { id: "edge126", source: "finfun", target: "tuple" } },
{ data: { id: "edge127", source: "quotient", target: "automorphism" } },
{ data: { id: "edge128", source: "path", target: "seq" } },
{ data: { id: "edge129", source: "div", target: "seq" } },
{ data: { id: "edge130", source: "choice", target: "seq" } },
{ data: { id: "edge131", source: "intdiv", target: "rat" } },
{ data: { id: "edge132", source: "action", target: "quotient" } },
{ data: { id: "edge133", source: "all", target: "all_field" } },
{ data: { id: "edge134", source: "countalg", target: "ring_quotient" } },
{ data: { id: "edge135", source: "finset", target: "bigop" } },
{ data: { id: "edge136", source: "prime", target: "bigop" } },
{ data: { id: "edge137", source: "ssrAC", target: "bigop" } },
{ data: { id: "edge138", source: "character", target: "mxrepresentation" } },
{ data: { id: "edge139", source: "mxabelem", target: "mxrepresentation" } },
{ data: { id: "edge140", source: "all_character", target: "mxabelem" } },
{ data: { id: "edge141", source: "mxpoly", target: "mxalgebra" } },
{ data: { id: "edge142", source: "vector", target: "mxalgebra" } },
{ data: { id: "edge143", source: "fieldext", target: "falgebra" } },
{ data: { id: "edge144", source: "presentation", target: "morphism" } },
{ data: { id: "edge145", source: "perm", target: "morphism" } },
{ data: { id: "edge146", source: "zmodp", target: "finalg" } },
{ data: { id: "edge147", source: "fintype", target: "choice" } },
{ data: { id: "edge148", source: "ring_quotient", target: "ssralg" } },
{ data: { id: "edge149", source: "algebraics_fundamentals", target: "closed_field" } },
{ data: { id: "edge150", source: "all", target: "all_solvable" } },
{ data: { id: "edge151", source: "cluster_algebra", target: "cluster_fingroup" } },
{ data: { id: "edge152", source: "cluster_solvable", target: "cluster_algebra" } },
{ data: { id: "edge153", source: "cluster_fingroup", target: "cluster_ssreflect" } },
{ data: { id: "edge154", source: "cluster_field", target: "cluster_solvable" } },
{ data: { id: "edge155", source: "cluster_all", target: "cluster_character" } },
{ data: { id: "edge156", source: "cluster_character", target: "cluster_field" } },
 ]; 
