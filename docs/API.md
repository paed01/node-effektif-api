1.0.0 API Reference
===
Auto-generated Api documentation.
**Table of contents:**
- [User](#user)
  - [`getAbout`](#user-getabout)
  - [`createLogin`](#user-createlogin)
  - [`updateLogin`](#user-updatelogin)
  - [`createRegistrations`](#user-createregistrations)
  - [`getRegistration`](#user-getregistration)
  - [`activateRegistration`](#user-activateregistration)
  - [`getRegistrationPicture`](#user-getregistrationpicture)
  - [`createRegistrationPicture`](#user-createregistrationpicture)
  - [`createRegistrationPictureiframe`](#user-createregistrationpictureiframe)
  - [`createUsersConfirm`](#user-createusersconfirm)
  - [`createUsersLogin`](#user-createuserslogin)
  - [`createUsersLoginHandover`](#user-createusersloginhandover)
  - [`createUsersReset`](#user-createusersreset)
  - [`getUser`](#user-getuser)
  - [`updateUser`](#user-updateuser)
  - [`createUserPicture`](#user-createuserpicture)
  - [`createUserPictureiframe`](#user-createuserpictureiframe)
  - [`getUsers`](#user-getusers)
  - [`createUserHandover`](#user-createuserhandover)
  - [`getUserPicture`](#user-getuserpicture)
  - [`updateUserPreferences`](#user-updateuserpreferences)
- [Task](#task)
  - [`getCases`](#task-getcases)
  - [`getCasesInfo`](#task-getcasesinfo)
  - [`getProcessStartForm`](#task-getprocessstartform)
  - [`createProcessTaskname`](#task-createprocesstaskname)
  - [`getTasks`](#task-gettasks)
  - [`headTasks`](#task-headtasks)
  - [`createTasks`](#task-createtasks)
  - [`getTasksFilterCounts`](#task-gettasksfiltercounts)
  - [`deleteTask`](#task-deletetask)
  - [`getTask`](#task-gettask)
  - [`updateTask`](#task-updatetask)
  - [`createTaskDocuments`](#task-createtaskdocuments)
  - [`createTaskDocumentsUpload`](#task-createtaskdocumentsupload)
  - [`createTaskDocumentsUploadiframe`](#task-createtaskdocumentsuploadiframe)
  - [`deleteTaskDocument`](#task-deletetaskdocument)
  - [`getTaskDocumentStream`](#task-gettaskdocumentstream)
  - [`getTaskEvents`](#task-gettaskevents)
  - [`createTaskEvents`](#task-createtaskevents)
  - [`createTaskFile`](#task-createtaskfile)
  - [`updateTaskFormField`](#task-updatetaskformfield)
  - [`getTaskMail`](#task-gettaskmail)
  - [`getTaskNext`](#task-gettasknext)
  - [`createTaskSubtasks`](#task-createtasksubtasks)
- [Process](#process)
  - [`getProcesses`](#process-getprocesses)
  - [`createProcess`](#process-createprocess)
  - [`createProcessesImport`](#process-createprocessesimport)
  - [`createProcessesImportJson`](#process-createprocessesimportjson)
  - [`deleteProcess`](#process-deleteprocess)
  - [`getProcess`](#process-getprocess)
  - [`updateProcess`](#process-updateprocess)
  - [`getProcessActivities`](#process-getprocessactivities)
  - [`createProcessActivities`](#process-createprocessactivities)
  - [`deleteProcessActivity`](#process-deleteprocessactivity)
  - [`getProcessActivity`](#process-getprocessactivity)
  - [`updateProcessActivity`](#process-updateprocessactivity)
  - [`updateProcessActivityConfigurationField`](#process-updateprocessactivityconfigurationfield)
  - [`getProcessActivityForm`](#process-getprocessactivityform)
  - [`updateProcessActivityForm`](#process-updateprocessactivityform)
  - [`getProcessActivityFormFields`](#process-getprocessactivityformfields)
  - [`createProcessActivityFormFields`](#process-createprocessactivityformfields)
  - [`deleteProcessActivityFormField`](#process-deleteprocessactivityformfield)
  - [`getProcessActivityFormField`](#process-getprocessactivityformfield)
  - [`updateProcessActivityFormField`](#process-updateprocessactivityformfield)
  - [`getProcessActivityParameters`](#process-getprocessactivityparameters)
  - [`updateProcessActivityParameter`](#process-updateprocessactivityparameter)
  - [`getProcessActivityParameterBindables`](#process-getprocessactivityparameterbindables)
  - [`createProcessActivityParameterBindings`](#process-createprocessactivityparameterbindings)
  - [`deleteProcessActivityParameterBinding`](#process-deleteprocessactivityparameterbinding)
  - [`createProcessActivityTest`](#process-createprocessactivitytest)
  - [`createProcessActivityVariableMappings`](#process-createprocessactivityvariablemappings)
  - [`deleteProcessActivityVariableMappings`](#process-deleteprocessactivityvariablemappings)
  - [`updateProcessActivityVariableMappings`](#process-updateprocessactivityvariablemappings)
  - [`getProcessBindables`](#process-getprocessbindables)
  - [`getProcessCaseColumns`](#process-getprocesscasecolumns)
  - [`createProcessCaseColumns`](#process-createprocesscasecolumns)
  - [`deleteProcessCaseColumns`](#process-deleteprocesscasecolumns)
  - [`updateProcessCaseColumns`](#process-updateprocesscasecolumns)
  - [`createProcessCopy`](#process-createprocesscopy)
  - [`getProcessDiagram`](#process-getprocessdiagram)
  - [`updateProcessDiagram`](#process-updateprocessdiagram)
  - [`getProcessExport`](#process-getprocessexport)
  - [`getProcessExportJson`](#process-getprocessexportjson)
  - [`getProcessTransitions`](#process-getprocesstransitions)
  - [`createProcessTransitions`](#process-createprocesstransitions)
  - [`deleteProcessTransition`](#process-deleteprocesstransition)
  - [`getProcessTransition`](#process-getprocesstransition)
  - [`updateProcessTransition`](#process-updateprocesstransition)
  - [`deleteProcessTrigger`](#process-deleteprocesstrigger)
  - [`getProcessTrigger`](#process-getprocesstrigger)
  - [`updateProcessTrigger`](#process-updateprocesstrigger)
  - [`getProcessTriggerForm`](#process-getprocesstriggerform)
  - [`updateProcessTriggerForm`](#process-updateprocesstriggerform)
  - [`getProcessTriggerFormFields`](#process-getprocesstriggerformfields)
  - [`createProcessTriggerFormFields`](#process-createprocesstriggerformfields)
  - [`deleteProcessTriggerFormField`](#process-deleteprocesstriggerformfield)
  - [`getProcessTriggerFormField`](#process-getprocesstriggerformfield)
  - [`updateProcessTriggerFormField`](#process-updateprocesstriggerformfield)
  - [`getProcessTriggerParameters`](#process-getprocesstriggerparameters)
  - [`getProcessVariables`](#process-getprocessvariables)
  - [`createProcessVariables`](#process-createprocessvariables)
  - [`deleteProcessVariable`](#process-deleteprocessvariable)
  - [`getProcessVariable`](#process-getprocessvariable)
  - [`updateProcessVariable`](#process-updateprocessvariable)
  - [`updateProcessVariableType`](#process-updateprocessvariabletype)
  - [`getProcessVersions`](#process-getprocessversions)
  - [`createProcessVersions`](#process-createprocessversions)
  - [`createProcessVersionPublish`](#process-createprocessversionpublish)
  - [`createProcessVersionRestore`](#process-createprocessversionrestore)
  - [`getProcessVersionTriggerForm`](#process-getprocessversiontriggerform)
  - [`getProcessVersionTriggerFormFields`](#process-getprocessversiontriggerformfields)
  - [`getTemplates`](#process-gettemplates)
- [Service](#service)
  - [`getOauth_callback`](#service-getoauth_callback)
  - [`getServiceAccounts`](#service-getserviceaccounts)
  - [`createServiceAccounts`](#service-createserviceaccounts)
  - [`getServiceAccount`](#service-getserviceaccount)
  - [`updateServiceAccount`](#service-updateserviceaccount)
  - [`getServiceAccountOption`](#service-getserviceaccountoption)
  - [`getServiceAccountReferences`](#service-getserviceaccountreferences)
  - [`getServiceOption`](#service-getserviceoption)
  - [`getServices`](#service-getservices)
  - [`createServicesOauthStart`](#service-createservicesoauthstart)
  - [`createServiceActionInstancesLock`](#service-createserviceactioninstanceslock)
  - [`createServiceActionInstancesEnd`](#service-createserviceactioninstancesend)
  - [`getServiceIcon`](#service-getserviceicon)
- [Search](#search)
  - [`getSearch`](#search-getsearch)
- [File](#file)
  - [`createFiles`](#file-createfiles)
  - [`deleteFile`](#file-deletefile)
  - [`getFile`](#file-getfile)
  - [`getFileStream`](#file-getfilestream)
  - [`createFilesiframe`](#file-createfilesiframe)
- [ProcessInstance](#processinstance)
  - [`getProcessInstancesVariables`](#processinstance-getprocessinstancesvariables)
  - [`updateProcessInstancesVariables`](#processinstance-updateprocessinstancesvariables)

# User
**Constructor:**
- `options`
  - `authorization`: string - Authorization token, will be set as Authorization http header
  - `credentials`: object - Default credentials
    - `username`: string - Username
    - `password`: string - Password
  - `basePath`: string - Effektif-api base url, defaults to api endpoint documentation basePath
  - `onUnauthorized`: func - Excecuted when an unauthorized call was made or authorization token is missing. Receives operation arguments and callback
  - `users`: object - Users instance
    - `login`: **required** func - Login function
  - `log`: func - Logging function, defaults to console.log
  - `baseRequest`: func - Default request

## User getAbout
Represents call to:
`GET /about`

> Requires authorization

**Arguments:**
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [About](#model-about)

## User createLogin
Represents call to:
`POST /login/{providerKey}`

**Arguments:**
- `providerKey`: **required** string [string](#model-string)
- `body`: **required** object [ServiceLogin](#model-servicelogin)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [ServiceLogin](#model-servicelogin)

## User updateLogin
Represents call to:
`PUT /login/{providerKey}`

**Arguments:**
- `providerKey`: **required** string [string](#model-string)
- `code`: string [string](#model-string)
- `state`: string [string](#model-string)
- `error`: string [string](#model-string)
- `error_description`: string [string](#model-string)
- `body`: **required** object [ServiceLogin](#model-servicelogin)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [ServiceLogin](#model-servicelogin)

## User createRegistrations
Represents call to:
`POST /registrations`

**Arguments:**
- `body`: **required** object [NewRegistration](#model-newregistration)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [EmptyObject](#model-emptyobject)

## User getRegistration
Represents call to:
`GET /registrations/{code}`

**Arguments:**
- `code`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Registration](#model-registration)

## User activateRegistration
Represents call to:
`POST /registrations/{code}/activate`

**Arguments:**
- `code`: **required** string [string](#model-string)
- `body`: **required** object [ActivationRequest](#model-activationrequest)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [LoginResponse](#model-loginresponse)

## User getRegistrationPicture
Represents call to:
`GET /registrations/{code}/picture`

**Arguments:**
- `code`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [FileStream](#model-filestream)

## User createRegistrationPicture
Represents call to:
`POST /registrations/{code}/picture`

**Arguments:**
- `code`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [EmptyObject](#model-emptyobject)

## User createRegistrationPictureiframe
Represents call to:
`POST /registrations/{code}/pictureiframe`

**Arguments:**
- `code`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## User createUsersConfirm
Represents call to:
`POST /users/confirm`

**Arguments:**
- `body`: **required** object [PasswordResetConfirmation](#model-passwordresetconfirmation)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [LoginResponse](#model-loginresponse)

## User createUsersLogin
Represents call to:
`POST /users/login`

**Arguments:**
- `body`: **required** object [LoginRequest](#model-loginrequest)
- `callback`: **required** func - function(err, resp, body)


## User createUsersLoginHandover
Represents call to:
`POST /users/login/handover`

**Arguments:**
- `body`: **required** object [HandoverLogin](#model-handoverlogin)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [HandoverLogin](#model-handoverlogin)

## User createUsersReset
Represents call to:
`POST /users/reset`

**Arguments:**
- `body`: **required** object [UserMailAddress](#model-usermailaddress)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [EmptyObject](#model-emptyobject)

## User getUser
Represents call to:
`GET /{organizationKey}/users/{userId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `userId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [User](#model-user)

## User updateUser
Represents call to:
`PUT /{organizationKey}/users/{userId}`

**Arguments:**
- `userId`: **required** string [string](#model-string)
- `body`: **required** object [User](#model-user)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [User](#model-user)

## User createUserPicture
Represents call to:
`POST /{organizationKey}/users/{userId}/picture`

**Arguments:**
- `userId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [EmptyObject](#model-emptyobject)

## User createUserPictureiframe
Represents call to:
`POST /{organizationKey}/users/{userId}/pictureiframe`

**Arguments:**
- `userId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## User getUsers
Represents call to:
`GET /{organizationKey}/users`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## User createUserHandover
Represents call to:
`POST /{organizationKey}/users/{userId}/handover`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `userId`: **required** string [string](#model-string)
- `body`: **required** object [HandoverLogin](#model-handoverlogin)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [HandoverLogin](#model-handoverlogin)

## User getUserPicture
Represents call to:
`GET /{organizationKey}/users/{userId}/picture`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `userId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [FileStream](#model-filestream)

## User updateUserPreferences
Represents call to:
`PUT /{workspaceKey}/users/{userId}/preferences`

> Requires authorization

**Arguments:**
- `body`: **required** object [Map](#model-map)
- `callback`: **required** func - function(err, resp, body)


# Task
**Constructor:**
- `options`
  - `authorization`: string - Authorization token, will be set as Authorization http header
  - `credentials`: object - Default credentials
    - `username`: string - Username
    - `password`: string - Password
  - `basePath`: string - Effektif-api base url, defaults to api endpoint documentation basePath
  - `onUnauthorized`: func - Excecuted when an unauthorized call was made or authorization token is missing. Receives operation arguments and callback
  - `users`: object - Users instance
    - `login`: **required** func - Login function
  - `log`: func - Logging function, defaults to console.log
  - `baseRequest`: func - Default request

## Task getCases
Represents call to:
`GET /{organizationKey}/cases`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `process`: string [string](#model-string)
- `completed`: boolean [boolean](#model-boolean)
- `callback`: **required** func - function(err, resp, body)


## Task getCasesInfo
Represents call to:
`GET /{organizationKey}/cases/info`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Task getProcessStartForm
Represents call to:
`GET /{organizationKey}/processes/{processId}/startForm`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Form](#model-form)

## Task createProcessTaskname
Represents call to:
`POST /{organizationKey}/processes/{processId}/taskname`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Task](#model-task)

## Task getTasks
Represents call to:
`GET /{organizationKey}/tasks`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `involvement`: array [array](#model-array)
- `duedate`: array [array](#model-array)
- `process`: string [string](#model-string)
- `completed`: boolean [boolean](#model-boolean)
- `callback`: **required** func - function(err, resp, body)


## Task headTasks
Represents call to:
`HEAD /{organizationKey}/tasks`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `involvement`: array [array](#model-array)
- `duedate`: array [array](#model-array)
- `completed`: boolean [boolean](#model-boolean)
- `processId`: string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Task createTasks
Represents call to:
`POST /{organizationKey}/tasks`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `body`: **required** object [NewTask](#model-newtask)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [TaskXL](#model-taskxl)

## Task getTasksFilterCounts
Represents call to:
`GET /{organizationKey}/tasks/filter/counts`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `involvement`: array [array](#model-array)
- `duedate`: array [array](#model-array)
- `processId`: string [string](#model-string)
- `completed`: boolean [boolean](#model-boolean)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [TaskCounts](#model-taskcounts)

## Task deleteTask
Represents call to:
`DELETE /{organizationKey}/tasks/{taskId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `taskId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Task getTask
Represents call to:
`GET /{organizationKey}/tasks/{taskId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `taskId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [TaskXL](#model-taskxl)

## Task updateTask
Represents call to:
`PUT /{organizationKey}/tasks/{taskId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `taskId`: **required** string [string](#model-string)
- `body`: **required** object [Task](#model-task)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [TaskXL](#model-taskxl)

## Task createTaskDocuments
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/documents`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `taskId`: **required** string [string](#model-string)
- `body`: **required** object [Document](#model-document)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Document](#model-document)

## Task createTaskDocumentsUpload
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/documents/upload`

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `taskId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [DocumentFile](#model-documentfile)

## Task createTaskDocumentsUploadiframe
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/documents/uploadiframe`

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `taskId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Task deleteTaskDocument
Represents call to:
`DELETE /{organizationKey}/tasks/{taskId}/documents/{documentId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `taskId`: **required** string [string](#model-string)
- `documentId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Task getTaskDocumentStream
Represents call to:
`GET /{organizationKey}/tasks/{taskId}/documents/{documentId}/stream`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `taskId`: **required** string [string](#model-string)
- `documentId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [FileStream](#model-filestream)

## Task getTaskEvents
Represents call to:
`GET /{organizationKey}/tasks/{taskId}/events`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `taskId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Task createTaskEvents
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/events`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `taskId`: **required** string [string](#model-string)
- `body`: **required** object [CommentRequest](#model-commentrequest)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [CommentAddEvent](#model-commentaddevent)

## Task createTaskFile
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/files/{fileId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `taskId`: **required** string [string](#model-string)
- `fileId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [DocumentFile](#model-documentfile)

## Task updateTaskFormField
Represents call to:
`PUT /{organizationKey}/tasks/{taskId}/form/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `taskId`: **required** string [string](#model-string)
- `fieldId`: **required** string [string](#model-string)
- `body`: **required** object [FormField](#model-formfield)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [FormField](#model-formfield)

## Task getTaskMail
Represents call to:
`GET /{organizationKey}/tasks/{taskId}/mails/{mailId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `taskId`: **required** string [string](#model-string)
- `mailId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Mail](#model-mail)

## Task getTaskNext
Represents call to:
`GET /{organizationKey}/tasks/{taskId}/next`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `taskId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Task createTaskSubtasks
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/subtasks`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `taskId`: **required** string [string](#model-string)
- `body`: **required** object [NewTask](#model-newtask)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [TaskXL](#model-taskxl)

# Process
**Constructor:**
- `options`
  - `authorization`: string - Authorization token, will be set as Authorization http header
  - `credentials`: object - Default credentials
    - `username`: string - Username
    - `password`: string - Password
  - `basePath`: string - Effektif-api base url, defaults to api endpoint documentation basePath
  - `onUnauthorized`: func - Excecuted when an unauthorized call was made or authorization token is missing. Receives operation arguments and callback
  - `users`: object - Users instance
    - `login`: **required** func - Login function
  - `log`: func - Logging function, defaults to console.log
  - `baseRequest`: func - Default request

## Process getProcesses
Represents call to:
`GET /{organizationKey}/processes`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processIds`: array [array](#model-array)
- `callback`: **required** func - function(err, resp, body)


## Process createProcess
Represents call to:
`POST /{organizationKey}/processes`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `body`: **required** object [NewProcess](#model-newprocess)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Process](#model-process)

## Process createProcessesImport
Represents call to:
`POST /{organizationKey}/processes/import`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `body`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process createProcessesImportJson
Represents call to:
`POST /{organizationKey}/processes/import/json`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `body`: **required** object [Process](#model-process)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Process](#model-process)

## Process deleteProcess
Represents call to:
`DELETE /{organizationKey}/processes/{processId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `cascade`: boolean [boolean](#model-boolean)
- `callback`: **required** func - function(err, resp, body)


## Process getProcess
Represents call to:
`GET /{organizationKey}/processes/{processId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `include`: string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Process](#model-process)

## Process updateProcess
Represents call to:
`PUT /{organizationKey}/processes/{processId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `body`: **required** object [Process](#model-process)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Process](#model-process)

## Process getProcessActivities
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process createProcessActivities
Represents call to:
`POST /{organizationKey}/processes/{processId}/activities`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `body`: **required** object [Activity](#model-activity)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Activity](#model-activity)

## Process deleteProcessActivity
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/activities/{activityId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process getProcessActivity
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Activity](#model-activity)

## Process updateProcessActivity
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `body`: **required** object [Activity](#model-activity)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Activity](#model-activity)

## Process updateProcessActivityConfigurationField
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}/configuration/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `fieldId`: **required** string [string](#model-string)
- `body`: **required** object [FormField](#model-formfield)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [FormField](#model-formfield)

## Process getProcessActivityForm
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}/form`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `versionId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Form](#model-form)

## Process updateProcessActivityForm
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}/form`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `body`: **required** object [Form](#model-form)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Form](#model-form)

## Process getProcessActivityFormFields
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}/form/fields`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `versionId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process createProcessActivityFormFields
Represents call to:
`POST /{organizationKey}/processes/{processId}/activities/{activityId}/form/fields`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `body`: **required** object [NewFormField](#model-newformfield)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [NewFormField](#model-newformfield)

## Process deleteProcessActivityFormField
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/activities/{activityId}/form/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `fieldId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process getProcessActivityFormField
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}/form/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `fieldId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [FormField](#model-formfield)

## Process updateProcessActivityFormField
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}/form/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `fieldId`: **required** string [string](#model-string)
- `body`: **required** object [FormField](#model-formfield)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [FormField](#model-formfield)

## Process getProcessActivityParameters
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}/parameters`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process updateProcessActivityParameter
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}/parameters/{parameterKey}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `parameterKey`: **required** string [string](#model-string)
- `body`: **required** object [Parameter](#model-parameter)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Parameter](#model-parameter)

## Process getProcessActivityParameterBindables
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}/parameters/{parameterKey}/bindables`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `parameterKey`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process createProcessActivityParameterBindings
Represents call to:
`POST /{organizationKey}/processes/{processId}/activities/{activityId}/parameters/{parameterKey}/bindings`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `parameterKey`: **required** string [string](#model-string)
- `body`: **required** object [Binding](#model-binding)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Binding](#model-binding)

## Process deleteProcessActivityParameterBinding
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/activities/{activityId}/parameters/{parameterKey}/bindings/{bindingId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `parameterKey`: **required** string [string](#model-string)
- `bindingId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process createProcessActivityTest
Represents call to:
`POST /{organizationKey}/processes/{processId}/activities/{activityId}/test`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [JavaScriptResponse](#model-javascriptresponse)

## Process createProcessActivityVariableMappings
Represents call to:
`POST /{organizationKey}/processes/{processId}/activities/{activityId}/variableMappings`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `body`: **required** object [VariableMapping](#model-variablemapping)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [VariableMapping](#model-variablemapping)

## Process deleteProcessActivityVariableMappings
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/activities/{activityId}/variableMappings/{variableMappingId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `variableMappingId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process updateProcessActivityVariableMappings
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}/variableMappings/{variableMappingId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `variableMappingId`: **required** string [string](#model-string)
- `body`: **required** object [VariableMapping](#model-variablemapping)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [VariableMapping](#model-variablemapping)

## Process getProcessBindables
Represents call to:
`GET /{organizationKey}/processes/{processId}/bindables`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process getProcessCaseColumns
Represents call to:
`GET /{organizationKey}/processes/{processId}/caseColumns`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process createProcessCaseColumns
Represents call to:
`POST /{organizationKey}/processes/{processId}/caseColumns`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `body`: **required** object [CazeColumn](#model-cazecolumn)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [CazeColumn](#model-cazecolumn)

## Process deleteProcessCaseColumns
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/caseColumns/{columnId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `columnId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process updateProcessCaseColumns
Represents call to:
`PUT /{organizationKey}/processes/{processId}/caseColumns/{columnId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `columnId`: **required** string [string](#model-string)
- `body`: **required** object [CazeColumn](#model-cazecolumn)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [CazeColumn](#model-cazecolumn)

## Process createProcessCopy
Represents call to:
`POST /{organizationKey}/processes/{processId}/copy`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Process](#model-process)

## Process getProcessDiagram
Represents call to:
`GET /{organizationKey}/processes/{processId}/diagram`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Diagram](#model-diagram)

## Process updateProcessDiagram
Represents call to:
`PUT /{organizationKey}/processes/{processId}/diagram`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `body`: **required** object [Diagram](#model-diagram)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Diagram](#model-diagram)

## Process getProcessExport
Represents call to:
`GET /{organizationKey}/processes/{processId}/export`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process getProcessExportJson
Represents call to:
`GET /{organizationKey}/processes/{processId}/export/json`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Process](#model-process)

## Process getProcessTransitions
Represents call to:
`GET /{organizationKey}/processes/{processId}/transitions`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process createProcessTransitions
Represents call to:
`POST /{organizationKey}/processes/{processId}/transitions`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `body`: **required** object [Transition](#model-transition)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Transition](#model-transition)

## Process deleteProcessTransition
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/transitions/{transitionId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `transitionId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process getProcessTransition
Represents call to:
`GET /{organizationKey}/processes/{processId}/transitions/{transitionId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `transitionId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Transition](#model-transition)

## Process updateProcessTransition
Represents call to:
`PUT /{organizationKey}/processes/{processId}/transitions/{transitionId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `transitionId`: **required** string [string](#model-string)
- `body`: **required** object [Transition](#model-transition)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Transition](#model-transition)

## Process deleteProcessTrigger
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/trigger`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process getProcessTrigger
Represents call to:
`GET /{organizationKey}/processes/{processId}/trigger`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Trigger](#model-trigger)

## Process updateProcessTrigger
Represents call to:
`PUT /{organizationKey}/processes/{processId}/trigger`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `body`: **required** object [Trigger](#model-trigger)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Trigger](#model-trigger)

## Process getProcessTriggerForm
Represents call to:
`GET /{organizationKey}/processes/{processId}/trigger/form`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `versionId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Form](#model-form)

## Process updateProcessTriggerForm
Represents call to:
`PUT /{organizationKey}/processes/{processId}/trigger/form`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `body`: **required** object [Form](#model-form)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Form](#model-form)

## Process getProcessTriggerFormFields
Represents call to:
`GET /{organizationKey}/processes/{processId}/trigger/form/fields`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `versionId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process createProcessTriggerFormFields
Represents call to:
`POST /{organizationKey}/processes/{processId}/trigger/form/fields`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `body`: **required** object [NewFormField](#model-newformfield)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [NewFormField](#model-newformfield)

## Process deleteProcessTriggerFormField
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/trigger/form/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `fieldId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process getProcessTriggerFormField
Represents call to:
`GET /{organizationKey}/processes/{processId}/trigger/form/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `fieldId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [FormField](#model-formfield)

## Process updateProcessTriggerFormField
Represents call to:
`PUT /{organizationKey}/processes/{processId}/trigger/form/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `fieldId`: **required** string [string](#model-string)
- `body`: **required** object [FormField](#model-formfield)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [FormField](#model-formfield)

## Process getProcessTriggerParameters
Represents call to:
`GET /{organizationKey}/processes/{processId}/trigger/parameters`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process getProcessVariables
Represents call to:
`GET /{organizationKey}/processes/{processId}/variables`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process createProcessVariables
Represents call to:
`POST /{organizationKey}/processes/{processId}/variables`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `body`: **required** object [Variable](#model-variable)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Variable](#model-variable)

## Process deleteProcessVariable
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/variables/{variableId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `variableId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process getProcessVariable
Represents call to:
`GET /{organizationKey}/processes/{processId}/variables/{variableId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `variableId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Variable](#model-variable)

## Process updateProcessVariable
Represents call to:
`PUT /{organizationKey}/processes/{processId}/variables/{variableId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `variableId`: **required** string [string](#model-string)
- `body`: **required** object [Variable](#model-variable)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Variable](#model-variable)

## Process updateProcessVariableType
Represents call to:
`PUT /{organizationKey}/processes/{processId}/variables/{variableId}/type`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `variableId`: **required** string [string](#model-string)
- `body`: **required** object [Type](#model-type)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Type](#model-type)

## Process getProcessVersions
Represents call to:
`GET /{organizationKey}/processes/{processId}/versions`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process createProcessVersions
Represents call to:
`POST /{organizationKey}/processes/{processId}/versions`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [ProcessDefinition](#model-processdefinition)

## Process createProcessVersionPublish
Represents call to:
`POST /{organizationKey}/processes/{processId}/versions/{versionId}/publish`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `versionId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [ProcessDefinition](#model-processdefinition)

## Process createProcessVersionRestore
Represents call to:
`POST /{organizationKey}/processes/{processId}/versions/{versionId}/restore`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `versionId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Process](#model-process)

## Process getProcessVersionTriggerForm
Represents call to:
`GET /{organizationKey}/processes/{processId}/versions/{versionId}/trigger/form`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `versionId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Form](#model-form)

## Process getProcessVersionTriggerFormFields
Represents call to:
`GET /{organizationKey}/processes/{processId}/versions/{versionId}/trigger/form/fields`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `versionId`: **required** string [string](#model-string)
- `activityId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Process getTemplates
Represents call to:
`GET /{organizationKey}/templates`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `category`: string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


# Service
**Constructor:**
- `options`
  - `authorization`: string - Authorization token, will be set as Authorization http header
  - `credentials`: object - Default credentials
    - `username`: string - Username
    - `password`: string - Password
  - `basePath`: string - Effektif-api base url, defaults to api endpoint documentation basePath
  - `onUnauthorized`: func - Excecuted when an unauthorized call was made or authorization token is missing. Receives operation arguments and callback
  - `users`: object - Users instance
    - `login`: **required** func - Login function
  - `log`: func - Logging function, defaults to console.log
  - `baseRequest`: func - Default request

## Service getOauth_callback
Represents call to:
`GET /oauth_callback`

**Arguments:**
- `state`: string [string](#model-string)
- `code`: string [string](#model-string)
- `error`: string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Service getServiceAccounts
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/accounts`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `serviceKey`: **required** string [string](#model-string)
- `excludeOwner`: string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Service createServiceAccounts
Represents call to:
`POST /{organizationKey}/services/{serviceKey}/accounts`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `serviceKey`: **required** string [string](#model-string)
- `body`: **required** object [Account](#model-account)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Account](#model-account)

## Service getServiceAccount
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/accounts/{accountId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `serviceKey`: **required** string [string](#model-string)
- `accountId`: **required** string [string](#model-string)
- `excludeOwner`: string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Account](#model-account)

## Service updateServiceAccount
Represents call to:
`PUT /{organizationKey}/services/{serviceKey}/accounts/{accountId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `serviceKey`: **required** string [string](#model-string)
- `accountId`: **required** string [string](#model-string)
- `body`: **required** object [Account](#model-account)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [Account](#model-account)

## Service getServiceAccountOption
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/accounts/{accountId}/options/{optionsKey}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `serviceKey`: **required** string [string](#model-string)
- `accountId`: **required** string [string](#model-string)
- `optionsKey`: **required** string [string](#model-string)
- `excludeOwner`: string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Service getServiceAccountReferences
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/accounts/{accountId}/references`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `serviceKey`: **required** string [string](#model-string)
- `accountId`: **required** string [string](#model-string)
- `q`: string [string](#model-string)
- `parent`: string [string](#model-string)
- `pathTo`: string [string](#model-string)
- `excludeOwner`: string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Service getServiceOption
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/options/{optionsKey}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `serviceKey`: **required** string [string](#model-string)
- `accountId`: **required** string [string](#model-string)
- `optionsKey`: **required** string [string](#model-string)
- `excludeOwner`: string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Service getServices
Represents call to:
`GET /{organizationKey}/services`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## Service createServicesOauthStart
Represents call to:
`POST /{organizationKey}/services/oauth/start`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `body`: **required** object [OauthStartRequest](#model-oauthstartrequest)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [OauthStartResponse](#model-oauthstartresponse)

## Service createServiceActionInstancesLock
Represents call to:
`POST /{organizationKey}/services/{serviceKey}/actionInstances/lock`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `serviceKey`: **required** string [string](#model-string)
- `body`: **required** object [ActionInstance](#model-actioninstance)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [ActionInstance](#model-actioninstance)

## Service createServiceActionInstancesEnd
Represents call to:
`POST /{organizationKey}/services/{serviceKey}/actionInstances/{actionInstanceId}/end`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `serviceKey`: **required** string [string](#model-string)
- `actionInstanceId`: **required** string [string](#model-string)
- `body`: **required** object [ActionInstanceEnd](#model-actioninstanceend)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [EmptyObject](#model-emptyobject)

## Service getServiceIcon
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/icon`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `serviceKey`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [FileStream](#model-filestream)

# Search
**Constructor:**
- `options`
  - `authorization`: string - Authorization token, will be set as Authorization http header
  - `credentials`: object - Default credentials
    - `username`: string - Username
    - `password`: string - Password
  - `basePath`: string - Effektif-api base url, defaults to api endpoint documentation basePath
  - `onUnauthorized`: func - Excecuted when an unauthorized call was made or authorization token is missing. Receives operation arguments and callback
  - `users`: object - Users instance
    - `login`: **required** func - Login function
  - `log`: func - Logging function, defaults to console.log
  - `baseRequest`: func - Default request

## Search getSearch
Represents call to:
`GET /{organizationKey}/search`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `query`: string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [SearchResult](#model-searchresult)

# File
**Constructor:**
- `options`
  - `authorization`: string - Authorization token, will be set as Authorization http header
  - `credentials`: object - Default credentials
    - `username`: string - Username
    - `password`: string - Password
  - `basePath`: string - Effektif-api base url, defaults to api endpoint documentation basePath
  - `onUnauthorized`: func - Excecuted when an unauthorized call was made or authorization token is missing. Receives operation arguments and callback
  - `users`: object - Users instance
    - `login`: **required** func - Login function
  - `log`: func - Logging function, defaults to console.log
  - `baseRequest`: func - Default request

## File createFiles
Represents call to:
`POST /{organizationKey}/files`

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [File](#model-file)

## File deleteFile
Represents call to:
`DELETE /{organizationKey}/files/{fileId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `fileId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## File getFile
Represents call to:
`GET /{organizationKey}/files/{fileId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `fileId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [File](#model-file)

## File getFileStream
Represents call to:
`GET /{organizationKey}/files/{fileId}/stream`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `fileId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


**Callback:**
- `error`: Error or null
- `response`: Http response
- `body`: [FileStream](#model-filestream)

## File createFilesiframe
Represents call to:
`POST /{organizationKey}/filesiframe`

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


# ProcessInstance
**Constructor:**
- `options`
  - `authorization`: string - Authorization token, will be set as Authorization http header
  - `credentials`: object - Default credentials
    - `username`: string - Username
    - `password`: string - Password
  - `basePath`: string - Effektif-api base url, defaults to api endpoint documentation basePath
  - `onUnauthorized`: func - Excecuted when an unauthorized call was made or authorization token is missing. Receives operation arguments and callback
  - `users`: object - Users instance
    - `login`: **required** func - Login function
  - `log`: func - Logging function, defaults to console.log
  - `baseRequest`: func - Default request

## ProcessInstance getProcessInstancesVariables
Represents call to:
`GET /{organizationKey}/processes/{processId}/instances/{processInstanceId}/variables`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `processInstanceId`: **required** string [string](#model-string)
- `callback`: **required** func - function(err, resp, body)


## ProcessInstance updateProcessInstancesVariables
Represents call to:
`PUT /{organizationKey}/processes/{processId}/instances/{processInstanceId}/variables`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string [string](#model-string)
- `processId`: **required** string [string](#model-string)
- `processInstanceId`: **required** string [string](#model-string)
- `body`: **required** object [List](#model-list)
- `callback`: **required** func - function(err, resp, body)


# Models

## Model About
- `version`: string
- `buildDate`: string
- `latestCommits`: array ref [string](#model-string)


**Used by:**
[`User.getAbout`](#user-getabout)

## Model string

**Used by:**
[`User.createLogin`](#user-createlogin)
[`User.updateLogin`](#user-updatelogin)
[`User.getRegistration`](#user-getregistration)
[`User.activateRegistration`](#user-activateregistration)
[`User.getRegistrationPicture`](#user-getregistrationpicture)
[`User.createRegistrationPicture`](#user-createregistrationpicture)
[`User.createRegistrationPictureiframe`](#user-createregistrationpictureiframe)
[`User.getUser`](#user-getuser)
[`User.updateUser`](#user-updateuser)
[`User.createUserPicture`](#user-createuserpicture)
[`User.createUserPictureiframe`](#user-createuserpictureiframe)
[`User.getUsers`](#user-getusers)
[`User.createUserHandover`](#user-createuserhandover)
[`User.getUserPicture`](#user-getuserpicture)
[`Task.getCases`](#task-getcases)
[`Task.getCasesInfo`](#task-getcasesinfo)
[`Task.getProcessStartForm`](#task-getprocessstartform)
[`Task.createProcessTaskname`](#task-createprocesstaskname)
[`Task.getTasks`](#task-gettasks)
[`Task.headTasks`](#task-headtasks)
[`Task.createTasks`](#task-createtasks)
[`Task.getTasksFilterCounts`](#task-gettasksfiltercounts)
[`Task.deleteTask`](#task-deletetask)
[`Task.getTask`](#task-gettask)
[`Task.updateTask`](#task-updatetask)
[`Task.createTaskDocuments`](#task-createtaskdocuments)
[`Task.createTaskDocumentsUpload`](#task-createtaskdocumentsupload)
[`Task.createTaskDocumentsUploadiframe`](#task-createtaskdocumentsuploadiframe)
[`Task.deleteTaskDocument`](#task-deletetaskdocument)
[`Task.getTaskDocumentStream`](#task-gettaskdocumentstream)
[`Task.getTaskEvents`](#task-gettaskevents)
[`Task.createTaskEvents`](#task-createtaskevents)
[`Task.createTaskFile`](#task-createtaskfile)
[`Task.updateTaskFormField`](#task-updatetaskformfield)
[`Task.getTaskMail`](#task-gettaskmail)
[`Task.getTaskNext`](#task-gettasknext)
[`Task.createTaskSubtasks`](#task-createtasksubtasks)
[`Process.getProcesses`](#process-getprocesses)
[`Process.createProcess`](#process-createprocess)
[`Process.createProcessesImport`](#process-createprocessesimport)
[`Process.createProcessesImportJson`](#process-createprocessesimportjson)
[`Process.deleteProcess`](#process-deleteprocess)
[`Process.getProcess`](#process-getprocess)
[`Process.updateProcess`](#process-updateprocess)
[`Process.getProcessActivities`](#process-getprocessactivities)
[`Process.createProcessActivities`](#process-createprocessactivities)
[`Process.deleteProcessActivity`](#process-deleteprocessactivity)
[`Process.getProcessActivity`](#process-getprocessactivity)
[`Process.updateProcessActivity`](#process-updateprocessactivity)
[`Process.updateProcessActivityConfigurationField`](#process-updateprocessactivityconfigurationfield)
[`Process.getProcessActivityForm`](#process-getprocessactivityform)
[`Process.updateProcessActivityForm`](#process-updateprocessactivityform)
[`Process.getProcessActivityFormFields`](#process-getprocessactivityformfields)
[`Process.createProcessActivityFormFields`](#process-createprocessactivityformfields)
[`Process.deleteProcessActivityFormField`](#process-deleteprocessactivityformfield)
[`Process.getProcessActivityFormField`](#process-getprocessactivityformfield)
[`Process.updateProcessActivityFormField`](#process-updateprocessactivityformfield)
[`Process.getProcessActivityParameters`](#process-getprocessactivityparameters)
[`Process.updateProcessActivityParameter`](#process-updateprocessactivityparameter)
[`Process.getProcessActivityParameterBindables`](#process-getprocessactivityparameterbindables)
[`Process.createProcessActivityParameterBindings`](#process-createprocessactivityparameterbindings)
[`Process.deleteProcessActivityParameterBinding`](#process-deleteprocessactivityparameterbinding)
[`Process.createProcessActivityTest`](#process-createprocessactivitytest)
[`Process.createProcessActivityVariableMappings`](#process-createprocessactivityvariablemappings)
[`Process.deleteProcessActivityVariableMappings`](#process-deleteprocessactivityvariablemappings)
[`Process.updateProcessActivityVariableMappings`](#process-updateprocessactivityvariablemappings)
[`Process.getProcessBindables`](#process-getprocessbindables)
[`Process.getProcessCaseColumns`](#process-getprocesscasecolumns)
[`Process.createProcessCaseColumns`](#process-createprocesscasecolumns)
[`Process.deleteProcessCaseColumns`](#process-deleteprocesscasecolumns)
[`Process.updateProcessCaseColumns`](#process-updateprocesscasecolumns)
[`Process.createProcessCopy`](#process-createprocesscopy)
[`Process.getProcessDiagram`](#process-getprocessdiagram)
[`Process.updateProcessDiagram`](#process-updateprocessdiagram)
[`Process.getProcessExport`](#process-getprocessexport)
[`Process.getProcessExportJson`](#process-getprocessexportjson)
[`Process.getProcessTransitions`](#process-getprocesstransitions)
[`Process.createProcessTransitions`](#process-createprocesstransitions)
[`Process.deleteProcessTransition`](#process-deleteprocesstransition)
[`Process.getProcessTransition`](#process-getprocesstransition)
[`Process.updateProcessTransition`](#process-updateprocesstransition)
[`Process.deleteProcessTrigger`](#process-deleteprocesstrigger)
[`Process.getProcessTrigger`](#process-getprocesstrigger)
[`Process.updateProcessTrigger`](#process-updateprocesstrigger)
[`Process.getProcessTriggerForm`](#process-getprocesstriggerform)
[`Process.updateProcessTriggerForm`](#process-updateprocesstriggerform)
[`Process.getProcessTriggerFormFields`](#process-getprocesstriggerformfields)
[`Process.createProcessTriggerFormFields`](#process-createprocesstriggerformfields)
[`Process.deleteProcessTriggerFormField`](#process-deleteprocesstriggerformfield)
[`Process.getProcessTriggerFormField`](#process-getprocesstriggerformfield)
[`Process.updateProcessTriggerFormField`](#process-updateprocesstriggerformfield)
[`Process.getProcessTriggerParameters`](#process-getprocesstriggerparameters)
[`Process.getProcessVariables`](#process-getprocessvariables)
[`Process.createProcessVariables`](#process-createprocessvariables)
[`Process.deleteProcessVariable`](#process-deleteprocessvariable)
[`Process.getProcessVariable`](#process-getprocessvariable)
[`Process.updateProcessVariable`](#process-updateprocessvariable)
[`Process.updateProcessVariableType`](#process-updateprocessvariabletype)
[`Process.getProcessVersions`](#process-getprocessversions)
[`Process.createProcessVersions`](#process-createprocessversions)
[`Process.createProcessVersionPublish`](#process-createprocessversionpublish)
[`Process.createProcessVersionRestore`](#process-createprocessversionrestore)
[`Process.getProcessVersionTriggerForm`](#process-getprocessversiontriggerform)
[`Process.getProcessVersionTriggerFormFields`](#process-getprocessversiontriggerformfields)
[`Process.getTemplates`](#process-gettemplates)
[`Service.getOauth_callback`](#service-getoauth_callback)
[`Service.getServiceAccounts`](#service-getserviceaccounts)
[`Service.createServiceAccounts`](#service-createserviceaccounts)
[`Service.getServiceAccount`](#service-getserviceaccount)
[`Service.updateServiceAccount`](#service-updateserviceaccount)
[`Service.getServiceAccountOption`](#service-getserviceaccountoption)
[`Service.getServiceAccountReferences`](#service-getserviceaccountreferences)
[`Service.getServiceOption`](#service-getserviceoption)
[`Service.getServices`](#service-getservices)
[`Service.createServicesOauthStart`](#service-createservicesoauthstart)
[`Service.createServiceActionInstancesLock`](#service-createserviceactioninstanceslock)
[`Service.createServiceActionInstancesEnd`](#service-createserviceactioninstancesend)
[`Service.getServiceIcon`](#service-getserviceicon)
[`Search.getSearch`](#search-getsearch)
[`File.createFiles`](#file-createfiles)
[`File.deleteFile`](#file-deletefile)
[`File.getFile`](#file-getfile)
[`File.getFileStream`](#file-getfilestream)
[`File.createFilesiframe`](#file-createfilesiframe)
[`ProcessInstance.getProcessInstancesVariables`](#processinstance-getprocessinstancesvariables)
[`ProcessInstance.updateProcessInstancesVariables`](#processinstance-updateprocessinstancesvariables)

## Model ServiceLogin
- `stateReference`: string
- `authenticationUrl`: string
- `token`: string
- `redirectTo`: string
- `hostname`: string


**Used by:**
[`User.createLogin`](#user-createlogin)
[`User.updateLogin`](#user-updatelogin)

## Model NewRegistration
- `mailAddress`: string
- `firstName`: string
- `lastName`: string


**Used by:**
[`User.createRegistrations`](#user-createregistrations)

## Model EmptyObject


**Used by:**
[`User.createRegistrations`](#user-createregistrations)
[`User.createRegistrationPicture`](#user-createregistrationpicture)
[`User.createUsersReset`](#user-createusersreset)
[`User.createUserPicture`](#user-createuserpicture)
[`Service.createServiceActionInstancesEnd`](#service-createserviceactioninstancesend)

## Model Registration
- `id`: string
- `code`: string
- `organization`: object
- `organizationId`: string
- `token`: string
- `user`: object
  - `id`: string
  - `admin`: boolean
  - `color`: string
  - `created`: date
  - `external`: boolean
  - `firstName`: string
  - `groupIds`: array ref [string](#model-string)
  - `lastName`: string
  - `ldapDn`: string
  - `mailAddress`: string
  - `licenses`: array ref [License](#model-license)
  - `mailAddressLower`: string
  - `organizationIds`: array ref [string](#model-string)
  - `password`: string
  - `preferences`: object
  - `systemAdmin`: boolean
  - `systemUser`: boolean


**Used by:**
[`User.getRegistration`](#user-getregistration)

## Model ActivationRequest
- `password`: string
- `firstName`: string
- `lastName`: string
- `organizationName`: string
- `color`: string


**Used by:**
[`User.activateRegistration`](#user-activateregistration)

## Model LoginResponse
- `token`: string
- `user`: object
  - `id`: string
  - `admin`: boolean
  - `color`: string
  - `created`: date
  - `external`: boolean
  - `firstName`: string
  - `groupIds`: array ref [string](#model-string)
  - `lastName`: string
  - `ldapDn`: string
  - `mailAddress`: string
  - `licenses`: array ref [License](#model-license)
  - `mailAddressLower`: string
  - `organizationIds`: array ref [string](#model-string)
  - `password`: string
  - `preferences`: object
  - `systemAdmin`: boolean
  - `systemUser`: boolean
- `organizations`: array ref [Organization](#model-organization)


**Used by:**
[`User.activateRegistration`](#user-activateregistration)
[`User.createUsersConfirm`](#user-createusersconfirm)

## Model FileStream
- `inputStream`: binary
- `contentType`: string
- `contentDispositionInlineFileName`: string
- `cacheControlMaxAgeInMillis`: number


**Used by:**
[`User.getRegistrationPicture`](#user-getregistrationpicture)
[`User.getUserPicture`](#user-getuserpicture)
[`Task.getTaskDocumentStream`](#task-gettaskdocumentstream)
[`Service.getServiceIcon`](#service-getserviceicon)
[`File.getFileStream`](#file-getfilestream)

## Model PasswordResetConfirmation
- `code`: string
- `password`: string


**Used by:**
[`User.createUsersConfirm`](#user-createusersconfirm)

## Model LoginRequest
- `mailAddress`: string
- `password`: string
- `token`: string
- `hostname`: string
- `path`: string
- `organizationKey`: string


**Used by:**
[`User.createUsersLogin`](#user-createuserslogin)

## Model HandoverLogin
- `reference`: string
- `token`: string
- `redirectTo`: string
- `organizationKey`: string


**Used by:**
[`User.createUsersLoginHandover`](#user-createusersloginhandover)
[`User.createUserHandover`](#user-createuserhandover)

## Model UserMailAddress
- `mailAddress`: string


**Used by:**
[`User.createUsersReset`](#user-createusersreset)

## Model User
- `id`: string
- `admin`: boolean
- `color`: string
- `created`: date
- `external`: boolean
- `firstName`: string
- `groupIds`: array ref [string](#model-string)
- `lastName`: string
- `ldapDn`: string
- `mailAddress`: string
- `licenses`: array ref [License](#model-license)
- `mailAddressLower`: string
- `organizationIds`: array ref [string](#model-string)
- `password`: string
- `preferences`: object
- `systemAdmin`: boolean
- `systemUser`: boolean


**Used by:**
[`User.getUser`](#user-getuser)
[`User.updateUser`](#user-updateuser)

## Model Map


**Used by:**
[`User.updateUserPreferences`](#user-updateuserpreferences)

## Model boolean

**Used by:**
[`Task.getCases`](#task-getcases)
[`Task.getTasks`](#task-gettasks)
[`Task.headTasks`](#task-headtasks)
[`Task.getTasksFilterCounts`](#task-gettasksfiltercounts)
[`Process.deleteProcess`](#process-deleteprocess)

## Model Form
- `id`: string
- `activityId`: string
- `button`: string
- `buttons`: array ref [string](#model-string)
- `description`: string
- `fields`: array ref [FormField](#model-formfield)
- `fieldsOrder`: array ref [string](#model-string)
- `organizationId`: string
- `processId`: string


**Used by:**
[`Task.getProcessStartForm`](#task-getprocessstartform)
[`Process.getProcessActivityForm`](#process-getprocessactivityform)
[`Process.updateProcessActivityForm`](#process-updateprocessactivityform)
[`Process.getProcessTriggerForm`](#process-getprocesstriggerform)
[`Process.updateProcessTriggerForm`](#process-updateprocesstriggerform)
[`Process.getProcessVersionTriggerForm`](#process-getprocessversiontriggerform)

## Model Task
- `id`: string
- `access`: any
- `assigneeId`: string
- `caze`: any
- `cazeId`: string
- `candidateIds`: array ref [string](#model-string)
- `candidateGroupIds`: array ref [string](#model-string)
- `canceled`: boolean
- `completed`: boolean
- `createdBy`: string
- `description`: string
- `documentIds`: array ref [string](#model-string)
- `duedate`: date
- `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array ref [string](#model-string)
  - `description`: string
  - `fields`: array ref [FormField](#model-formfield)
  - `fieldsOrder`: array ref [string](#model-string)
  - `organizationId`: string
  - `processId`: string
- `hasForm`: boolean
- `lastUpdated`: date
- `lock`: date
- `name`: string
- `organizationId`: string
- `parent`: any
- `parentId`: string
- `participantIds`: array ref [string](#model-string)
- `processId`: string
- `sandbox`: boolean
- `subtaskIds`: array ref [string](#model-string)
- `uncompletable`: boolean


**Used by:**
[`Task.createProcessTaskname`](#task-createprocesstaskname)
[`Task.updateTask`](#task-updatetask)

## Model array

**Used by:**
[`Task.getTasks`](#task-gettasks)
[`Task.headTasks`](#task-headtasks)
[`Task.getTasksFilterCounts`](#task-gettasksfiltercounts)
[`Process.getProcesses`](#process-getprocesses)

## Model NewTask
- `parentId`: string
- `assigneeId`: string
- `processId`: string
- `name`: string
- `triggerData`: any
- `sandbox`: boolean
- `isPrivate`: boolean


**Used by:**
[`Task.createTasks`](#task-createtasks)
[`Task.createTaskSubtasks`](#task-createtasksubtasks)

## Model TaskXL
- `id`: string
- `access`: any
- `assigneeId`: string
- `caze`: object
  - `id`: string
  - `access`: any
  - `assigneeId`: string
  - `caze`: any
  - `cazeId`: string
  - `candidateIds`: array ref [string](#model-string)
  - `candidateGroupIds`: array ref [string](#model-string)
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array ref [string](#model-string)
  - `duedate`: date
  - `form`: object
    - `id`: string
    - `activityId`: string
    - `button`: string
    - `buttons`: array ref [string](#model-string)
    - `description`: string
    - `fields`: array ref [FormField](#model-formfield)
    - `fieldsOrder`: array ref [string](#model-string)
    - `organizationId`: string
    - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array ref [string](#model-string)
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array ref [string](#model-string)
  - `uncompletable`: boolean
- `cazeId`: string
- `candidateIds`: array ref [string](#model-string)
- `candidateGroupIds`: array ref [string](#model-string)
- `canceled`: boolean
- `completed`: boolean
- `createdBy`: string
- `description`: string
- `documentIds`: array ref [string](#model-string)
- `duedate`: date
- `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array ref [string](#model-string)
  - `description`: string
  - `fields`: array ref [FormField](#model-formfield)
  - `fieldsOrder`: array ref [string](#model-string)
  - `organizationId`: string
  - `processId`: string
- `hasForm`: boolean
- `lastUpdated`: date
- `lock`: date
- `name`: string
- `organizationId`: string
- `parent`: object
  - `id`: string
  - `access`: any
  - `assigneeId`: string
  - `caze`: any
  - `cazeId`: string
  - `candidateIds`: array ref [string](#model-string)
  - `candidateGroupIds`: array ref [string](#model-string)
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array ref [string](#model-string)
  - `duedate`: date
  - `form`: object
    - `id`: string
    - `activityId`: string
    - `button`: string
    - `buttons`: array ref [string](#model-string)
    - `description`: string
    - `fields`: array ref [FormField](#model-formfield)
    - `fieldsOrder`: array ref [string](#model-string)
    - `organizationId`: string
    - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array ref [string](#model-string)
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array ref [string](#model-string)
  - `uncompletable`: boolean
- `parentId`: string
- `participantIds`: array ref [string](#model-string)
- `processId`: string
- `sandbox`: boolean
- `subtaskIds`: array ref [string](#model-string)
- `uncompletable`: boolean
- `assignee`: object
  - `id`: string
  - `admin`: boolean
  - `color`: string
  - `created`: date
  - `external`: boolean
  - `firstName`: string
  - `groupIds`: array ref [string](#model-string)
  - `lastName`: string
  - `ldapDn`: string
  - `mailAddress`: string
  - `licenses`: array ref [License](#model-license)
  - `mailAddressLower`: string
  - `organizationIds`: array ref [string](#model-string)
  - `password`: string
  - `preferences`: object
  - `systemAdmin`: boolean
  - `systemUser`: boolean
- `participants`: array ref [User](#model-user)
- `candidates`: array ref [User](#model-user)
- `subtasks`: array ref [Task](#model-task)
- `documents`: array ref [Document](#model-document)
- `events`: array ref [Event](#model-event)


**Used by:**
[`Task.createTasks`](#task-createtasks)
[`Task.getTask`](#task-gettask)
[`Task.updateTask`](#task-updatetask)
[`Task.createTaskSubtasks`](#task-createtasksubtasks)

## Model TaskCounts
- `involvementCount`: any
- `processCount`: object


**Used by:**
[`Task.getTasksFilterCounts`](#task-gettasksfiltercounts)

## Model Document
- `id`: string
- `created`: date
- `name`: string
- `organizationId`: string
- `ownerId`: string
- `taskId`: string
- `url`: string


**Used by:**
[`Task.createTaskDocuments`](#task-createtaskdocuments)

## Model DocumentFile
- `id`: string
- `created`: date
- `name`: string
- `organizationId`: string
- `ownerId`: string
- `taskId`: string
- `url`: string
- `mimeType`: string


**Used by:**
[`Task.createTaskDocumentsUpload`](#task-createtaskdocumentsupload)
[`Task.createTaskFile`](#task-createtaskfile)

## Model CommentRequest
- `cazeId`: string
- `message`: string
- `taskId`: string


**Used by:**
[`Task.createTaskEvents`](#task-createtaskevents)

## Model CommentAddEvent
- `id`: string
- `cazeId`: string
- `name`: string
- `task`: object
  - `id`: string
  - `access`: any
  - `assigneeId`: string
  - `caze`: any
  - `cazeId`: string
  - `candidateIds`: array ref [string](#model-string)
  - `candidateGroupIds`: array ref [string](#model-string)
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array ref [string](#model-string)
  - `duedate`: date
  - `form`: object
    - `id`: string
    - `activityId`: string
    - `button`: string
    - `buttons`: array ref [string](#model-string)
    - `description`: string
    - `fields`: array ref [FormField](#model-formfield)
    - `fieldsOrder`: array ref [string](#model-string)
    - `organizationId`: string
    - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array ref [string](#model-string)
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array ref [string](#model-string)
  - `uncompletable`: boolean
- `taskId`: string
- `time`: date
- `userId`: string
- `message`: string


**Used by:**
[`Task.createTaskEvents`](#task-createtaskevents)

## Model FormField
- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array ref [string](#model-string)
  - `variableId`: string
- `id`: string
- `key`: string
- `name`: string
- `readOnly`: boolean
- `required`: boolean
- `type`: object
- `value`: any


**Used by:**
[`Task.updateTaskFormField`](#task-updatetaskformfield)
[`Process.updateProcessActivityConfigurationField`](#process-updateprocessactivityconfigurationfield)
[`Process.getProcessActivityFormField`](#process-getprocessactivityformfield)
[`Process.updateProcessActivityFormField`](#process-updateprocessactivityformfield)
[`Process.getProcessTriggerFormField`](#process-getprocesstriggerformfield)
[`Process.updateProcessTriggerFormField`](#process-updateprocesstriggerformfield)

## Model Mail
- `id`: string
- `attachmentIds`: array ref [string](#model-string)
- `bcc`: array ref [string](#model-string)
- `bodyText`: string
- `bodyHtml`: string
- `cc`: array ref [string](#model-string)
- `from`: array ref [string](#model-string)
- `fromName`: string
- `organizationId`: string
- `preview`: string
- `replyTo`: array ref [string](#model-string)
- `source`: string
- `subject`: string
- `sendDate`: date
- `to`: array ref [string](#model-string)


**Used by:**
[`Task.getTaskMail`](#task-gettaskmail)

## Model NewProcess
- `name`: string
- `category`: string
- `trigger`: object
  - `id`: string
  - `access`: any
  - `activities`: array ref [Activity](#model-activity)
  - `activitiesOrder`: array ref [string](#model-string)
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array ref [Parameter](#model-parameter)
  - `processId`: string
  - `transitions`: array ref [Transition](#model-transition)
  - `variables`: array ref [Variable](#model-variable)
- `templateId`: string
- `isPrivate`: boolean


**Used by:**
[`Process.createProcess`](#process-createprocess)

## Model Process
- `id`: string
- `access`: any
- `activities`: array ref [Activity](#model-activity)
- `activitiesOrder`: array ref [string](#model-string)
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array ref [Parameter](#model-parameter)
- `processId`: string
- `transitions`: array ref [Transition](#model-transition)
- `variables`: array ref [Variable](#model-variable)
- `category`: string
- `caseColumnsOrder`: array ref [string](#model-string)
- `changed`: boolean
- `diagram`: object
  - `id`: string
  - `canvas`: any
  - `edges`: array ref [Edge](#model-edge)
  - `version`: number
- `disabled`: boolean
- `lastUpdated`: date
- `ownerId`: string
- `published`: boolean
- `template`: boolean
- `templateId`: string
- `trigger`: object
  - `id`: string
  - `access`: any
  - `activities`: array ref [Activity](#model-activity)
  - `activitiesOrder`: array ref [string](#model-string)
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array ref [Parameter](#model-parameter)
  - `processId`: string
  - `transitions`: array ref [Transition](#model-transition)
  - `variables`: array ref [Variable](#model-variable)


**Used by:**
[`Process.createProcess`](#process-createprocess)
[`Process.createProcessesImportJson`](#process-createprocessesimportjson)
[`Process.getProcess`](#process-getprocess)
[`Process.updateProcess`](#process-updateprocess)
[`Process.createProcessCopy`](#process-createprocesscopy)
[`Process.getProcessExportJson`](#process-getprocessexportjson)
[`Process.createProcessVersionRestore`](#process-createprocessversionrestore)

## Model Activity
- `id`: string
- `access`: any
- `activities`: array ref [Activity](#model-activity)
- `activitiesOrder`: array ref [string](#model-string)
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array ref [Parameter](#model-parameter)
- `processId`: string
- `transitions`: array ref [Transition](#model-transition)
- `variables`: array ref [Variable](#model-variable)


**Used by:**
[`Process.createProcessActivities`](#process-createprocessactivities)
[`Process.getProcessActivity`](#process-getprocessactivity)
[`Process.updateProcessActivity`](#process-updateprocessactivity)

## Model NewFormField
- `id`: string
- `key`: string
- `name`: string
- `readOnly`: boolean
- `required`: boolean
- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array ref [string](#model-string)
  - `variableId`: string


**Used by:**
[`Process.createProcessActivityFormFields`](#process-createprocessactivityformfields)
[`Process.createProcessTriggerFormFields`](#process-createprocesstriggerformfields)

## Model Parameter
- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array ref [string](#model-string)
  - `variableId`: string
- `bindings`: array ref [Binding](#model-binding)
- `fixed`: boolean
- `key`: string
- `list`: boolean
- `variable`: object
  - `id`: string
  - `bpmnId`: string
  - `defaultValue`: any
  - `name`: string
  - `organizationId`: string
  - `parentId`: string
  - `processId`: string
  - `type`: object


**Used by:**
[`Process.updateProcessActivityParameter`](#process-updateprocessactivityparameter)

## Model Binding
- `id`: string
- `converter`: string
- `fields`: array ref [string](#model-string)
- `variableId`: string


**Used by:**
[`Process.createProcessActivityParameterBindings`](#process-createprocessactivityparameterbindings)

## Model JavaScriptResponse
- `variableUpdates`: object
- `logs`: string
- `error`: boolean


**Used by:**
[`Process.createProcessActivityTest`](#process-createprocessactivitytest)

## Model VariableMapping
- `id`: string
- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array ref [string](#model-string)
  - `variableId`: string
- `scriptName`: string
- `testValue`: any


**Used by:**
[`Process.createProcessActivityVariableMappings`](#process-createprocessactivityvariablemappings)
[`Process.updateProcessActivityVariableMappings`](#process-updateprocessactivityvariablemappings)

## Model CazeColumn
- `id`: string
- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array ref [string](#model-string)
  - `variableId`: string
- `custom`: boolean
- `hidden`: boolean
- `name`: string
- `organizationId`: string
- `processId`: string


**Used by:**
[`Process.createProcessCaseColumns`](#process-createprocesscasecolumns)
[`Process.updateProcessCaseColumns`](#process-updateprocesscasecolumns)

## Model Diagram
- `id`: string
- `canvas`: any
- `edges`: array ref [Edge](#model-edge)
- `version`: number


**Used by:**
[`Process.getProcessDiagram`](#process-getprocessdiagram)
[`Process.updateProcessDiagram`](#process-updateprocessdiagram)

## Model Transition
- `id`: string
- `bpmnId`: string
- `button`: string
- `condition`: string
- `conditionExpression`: string
- `di`: object
- `from`: object
  - `id`: string
  - `access`: any
  - `activities`: array ref [Activity](#model-activity)
  - `activitiesOrder`: array ref [string](#model-string)
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array ref [Parameter](#model-parameter)
  - `processId`: string
  - `transitions`: array ref [Transition](#model-transition)
  - `variables`: array ref [Variable](#model-variable)
- `fromId`: string
- `name`: string
- `organizationId`: string
- `parentId`: string
- `processId`: string
- `to`: object
  - `id`: string
  - `access`: any
  - `activities`: array ref [Activity](#model-activity)
  - `activitiesOrder`: array ref [string](#model-string)
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array ref [Parameter](#model-parameter)
  - `processId`: string
  - `transitions`: array ref [Transition](#model-transition)
  - `variables`: array ref [Variable](#model-variable)
- `toId`: string


**Used by:**
[`Process.createProcessTransitions`](#process-createprocesstransitions)
[`Process.getProcessTransition`](#process-getprocesstransition)
[`Process.updateProcessTransition`](#process-updateprocesstransition)

## Model Trigger
- `id`: string
- `access`: any
- `activities`: array ref [Activity](#model-activity)
- `activitiesOrder`: array ref [string](#model-string)
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array ref [Parameter](#model-parameter)
- `processId`: string
- `transitions`: array ref [Transition](#model-transition)
- `variables`: array ref [Variable](#model-variable)


**Used by:**
[`Process.getProcessTrigger`](#process-getprocesstrigger)
[`Process.updateProcessTrigger`](#process-updateprocesstrigger)

## Model Variable
- `id`: string
- `bpmnId`: string
- `defaultValue`: any
- `name`: string
- `organizationId`: string
- `parentId`: string
- `processId`: string
- `type`: object


**Used by:**
[`Process.createProcessVariables`](#process-createprocessvariables)
[`Process.getProcessVariable`](#process-getprocessvariable)
[`Process.updateProcessVariable`](#process-updateprocessvariable)

## Model Type


**Used by:**
[`Process.updateProcessVariableType`](#process-updateprocessvariabletype)

## Model ProcessDefinition
- `id`: string
- `access`: any
- `activities`: array ref [Activity](#model-activity)
- `activitiesOrder`: array ref [string](#model-string)
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array ref [Parameter](#model-parameter)
- `processId`: string
- `transitions`: array ref [Transition](#model-transition)
- `variables`: array ref [Variable](#model-variable)
- `created`: date
- `diagram`: object
  - `id`: string
  - `canvas`: any
  - `edges`: array ref [Edge](#model-edge)
  - `version`: number
- `ownerId`: string
- `publisherId`: string
- `sandbox`: boolean
- `trigger`: object
  - `id`: string
  - `access`: any
  - `activities`: array ref [Activity](#model-activity)
  - `activitiesOrder`: array ref [string](#model-string)
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array ref [Parameter](#model-parameter)
  - `processId`: string
  - `transitions`: array ref [Transition](#model-transition)
  - `variables`: array ref [Variable](#model-variable)


**Used by:**
[`Process.createProcessVersions`](#process-createprocessversions)
[`Process.createProcessVersionPublish`](#process-createprocessversionpublish)

## Model Account
- `id`: string
- `access`: any
- `restricted`: boolean
- `serviceKey`: string
- `userId`: string


**Used by:**
[`Service.createServiceAccounts`](#service-createserviceaccounts)
[`Service.getServiceAccount`](#service-getserviceaccount)
[`Service.updateServiceAccount`](#service-updateserviceaccount)

## Model OauthStartRequest
- `path`: string
- `serviceKey`: string


**Used by:**
[`Service.createServicesOauthStart`](#service-createservicesoauthstart)

## Model OauthStartResponse
- `authorizationUrl`: string


**Used by:**
[`Service.createServicesOauthStart`](#service-createservicesoauthstart)

## Model ActionInstance
- `actionData`: object
- `actionKey`: string
- `activityInstanceId`: string
- `id`: string
- `configuration`: object
- `organizationId`: string
- `processId`: string
- `processInstanceId`: string
- `taskId`: string
- `serviceKey`: string


**Used by:**
[`Service.createServiceActionInstancesLock`](#service-createserviceactioninstanceslock)

## Model ActionInstanceEnd
- `parameters`: object


**Used by:**
[`Service.createServiceActionInstancesEnd`](#service-createserviceactioninstancesend)

## Model SearchResult
- `tasks`: array ref [Task](#model-task)
- `processes`: array ref [Process](#model-process)


**Used by:**
[`Search.getSearch`](#search-getsearch)

## Model File
- `contentType`: string
- `created`: date
- `fileName`: string
- `id`: string
- `mailId`: string
- `organizationId`: string
- `ownerId`: string
- `pictureRegistrationId`: string
- `sizeInBytes`: number
- `taskId`: string
- `userId`: string


**Used by:**
[`File.createFiles`](#file-createfiles)
[`File.getFile`](#file-getfile)

## Model List


**Used by:**
[`ProcessInstance.updateProcessInstancesVariables`](#processinstance-updateprocessinstancesvariables)
