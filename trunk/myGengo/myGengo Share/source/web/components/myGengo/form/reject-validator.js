/**
 * Copyright (C) 2012 fme AG.
 *
 * This file is part of the myGengo Alfresco integration implmented by fme AG (http://alfresco.fme.de).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

if (typeof MyGengo == "undefined")
{
	MyGengo = {};
}
if (typeof MyGengo.forms == "undefined")
{
	MyGengo.forms = {};
}
if (typeof MyGengo.forms.validation == "undefined")
{
	MyGengo.forms.validation = {};
} 

MyGengo.forms.validation.rejectCommentMandatory = function rejectCommentMandatory(field, args, event, form, silent, message){
	if (form.getFormData().prop_myGengo_rejectReason == "other"){
		 return YAHOO.lang.trim(field.value).length !== 0;
	}
	return true;
	
}