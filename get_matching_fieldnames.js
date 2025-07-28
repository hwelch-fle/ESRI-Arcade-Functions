// Get field names from input features
function GetFieldNames( InputFeature , OmitFields ){
    var FieldNames = [ ]
    var FeatureInfo = Schema(InputFeature).fields
    for ( var i in FeatureInfo ){
        // Populate the specified list with the field name
        if ( IsEmpty( OmitFields ) == False && Includes( OmitFields , FeatureInfo[ i ].name ) == False ) { Push( FieldNames , FeatureInfo[ i ].name ) }
        }
    return FieldNames
    }

// Get matching field names found in both lists
function GetMatchingFields( FieldListA, FieldListB ){
    var MatchingFields = [ ]
    // Loop through the list of field names in list A
    for ( var i in FieldListA ){
        var fieldname = FieldListA[i]
        /* If list of field names in list B includes the field name in list A
           then append the field name to the matching list of field names */
        if ( Includes( FieldListB , fieldname ) ){ Push( MatchingFields, fieldname ) }
        }
    return MatchingFields
    }