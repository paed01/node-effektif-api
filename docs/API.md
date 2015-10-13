1.1.0 API Reference
===
Auto-generated Api documentation.
**Table of contents:**
- [User](#user)
  - [`getUserInstance`](#user-getuserinstance)
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
  - [`getUserInstance`](#task-getuserinstance)
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
  - [`getUserInstance`](#process-getuserinstance)
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
  - [`getUserInstance`](#service-getuserinstance)
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
  - [`getUserInstance`](#search-getuserinstance)
  - [`getSearch`](#search-getsearch)
- [File](#file)
  - [`getUserInstance`](#file-getuserinstance)
  - [`createFiles`](#file-createfiles)
  - [`deleteFile`](#file-deletefile)
  - [`getFile`](#file-getfile)
  - [`getFileStream`](#file-getfilestream)
  - [`createFilesiframe`](#file-createfilesiframe)
- [ProcessInstance](#processinstance)
  - [`getUserInstance`](#processinstance-getuserinstance)
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
  - `onUnauthorized`: function - Excecuted when an unauthorized call was made or authorization token is missing. Receives operation arguments and callback
  - `users`: object - Users instance
    - `login`: **required** function - Login function
  - `log`: function - Logging function, defaults to console.log
  - `baseRequest`: function - Default request

## User getUserInstance

## User getAbout
Represents call to:
`GET /about`

> Requires authorization

**Arguments:**
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [About](#model-about)
- `resp`: Http response

## User createLogin
Represents call to:
`POST /login/{providerKey}`

**Arguments:**
- `providerKey`: **required** string
- `body`: **required** object [ServiceLogin](#model-servicelogin)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [ServiceLogin](#model-servicelogin)
- `resp`: Http response

## User updateLogin
Represents call to:
`PUT /login/{providerKey}`

**Arguments:**
- `providerKey`: **required** string
- `code`: string
- `state`: string
- `error`: string
- `error_description`: string
- `body`: **required** object [ServiceLogin](#model-servicelogin)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [ServiceLogin](#model-servicelogin)
- `resp`: Http response

## User createRegistrations
Represents call to:
`POST /registrations`

**Arguments:**
- `body`: **required** object [NewRegistration](#model-newregistration)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [EmptyObject](#model-emptyobject)
- `resp`: Http response

## User getRegistration
Represents call to:
`GET /registrations/{code}`

**Arguments:**
- `code`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Registration](#model-registration)
- `resp`: Http response

## User activateRegistration
Represents call to:
`POST /registrations/{code}/activate`

**Arguments:**
- `code`: **required** string
- `body`: **required** object [ActivationRequest](#model-activationrequest)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [LoginResponse](#model-loginresponse)
- `resp`: Http response

## User getRegistrationPicture
Represents call to:
`GET /registrations/{code}/picture`

**Arguments:**
- `code`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [FileStream](#model-filestream)
- `resp`: Http response

## User createRegistrationPicture
Represents call to:
`POST /registrations/{code}/picture`

**Arguments:**
- `code`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [EmptyObject](#model-emptyobject)
- `resp`: Http response

## User createRegistrationPictureiframe
Represents call to:
`POST /registrations/{code}/pictureiframe`

**Arguments:**
- `code`: **required** string
- `callback`: **required** function - function(err, body, resp)


## User createUsersConfirm
Represents call to:
`POST /users/confirm`

**Arguments:**
- `body`: **required** object [PasswordResetConfirmation](#model-passwordresetconfirmation)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [LoginResponse](#model-loginresponse)
- `resp`: Http response

## User createUsersLogin
Represents call to:
`POST /users/login`

**Arguments:**
- `body`: **required** object [LoginRequest](#model-loginrequest)
- `callback`: **required** function - function(err, body, resp)


## User createUsersLoginHandover
Represents call to:
`POST /users/login/handover`

**Arguments:**
- `body`: **required** object [HandoverLogin](#model-handoverlogin)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [HandoverLogin](#model-handoverlogin)
- `resp`: Http response

## User createUsersReset
Represents call to:
`POST /users/reset`

**Arguments:**
- `body`: **required** object [UserMailAddress](#model-usermailaddress)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [EmptyObject](#model-emptyobject)
- `resp`: Http response

## User getUser
Represents call to:
`GET /{organizationKey}/users/{userId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `userId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [User](#model-user)
- `resp`: Http response

## User updateUser
Represents call to:
`PUT /{organizationKey}/users/{userId}`

**Arguments:**
- `userId`: **required** string
- `body`: **required** object [User](#model-user)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [User](#model-user)
- `resp`: Http response

## User createUserPicture
Represents call to:
`POST /{organizationKey}/users/{userId}/picture`

**Arguments:**
- `userId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [EmptyObject](#model-emptyobject)
- `resp`: Http response

## User createUserPictureiframe
Represents call to:
`POST /{organizationKey}/users/{userId}/pictureiframe`

**Arguments:**
- `userId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## User getUsers
Represents call to:
`GET /{organizationKey}/users`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `callback`: **required** function - function(err, body, resp)


## User createUserHandover
Represents call to:
`POST /{organizationKey}/users/{userId}/handover`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `userId`: **required** string
- `body`: **required** object [HandoverLogin](#model-handoverlogin)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [HandoverLogin](#model-handoverlogin)
- `resp`: Http response

## User getUserPicture
Represents call to:
`GET /{organizationKey}/users/{userId}/picture`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `userId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [FileStream](#model-filestream)
- `resp`: Http response

## User updateUserPreferences
Represents call to:
`PUT /{workspaceKey}/users/{userId}/preferences`

> Requires authorization

**Arguments:**
- `body`: **required** object [Map](#model-map)
- `callback`: **required** function - function(err, body, resp)


# Task
**Constructor:**
- `options`
  - `authorization`: string - Authorization token, will be set as Authorization http header
  - `credentials`: object - Default credentials
    - `username`: string - Username
    - `password`: string - Password
  - `basePath`: string - Effektif-api base url, defaults to api endpoint documentation basePath
  - `onUnauthorized`: function - Excecuted when an unauthorized call was made or authorization token is missing. Receives operation arguments and callback
  - `users`: object - Users instance
    - `login`: **required** function - Login function
  - `log`: function - Logging function, defaults to console.log
  - `baseRequest`: function - Default request

## Task getUserInstance

## Task getCases
Represents call to:
`GET /{organizationKey}/cases`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `process`: string
- `completed`: boolean
- `callback`: **required** function - function(err, body, resp)


## Task getCasesInfo
Represents call to:
`GET /{organizationKey}/cases/info`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Task getProcessStartForm
Represents call to:
`GET /{organizationKey}/processes/{processId}/startForm`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Form](#model-form)
- `resp`: Http response

## Task createProcessTaskname
Represents call to:
`POST /{organizationKey}/processes/{processId}/taskname`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Task](#model-task)
- `resp`: Http response

## Task getTasks
Represents call to:
`GET /{organizationKey}/tasks`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `involvement`: array
- `duedate`: array
- `process`: string
- `completed`: boolean
- `callback`: **required** function - function(err, body, resp)


## Task headTasks
Represents call to:
`HEAD /{organizationKey}/tasks`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `involvement`: array
- `duedate`: array
- `completed`: boolean
- `processId`: string
- `callback`: **required** function - function(err, body, resp)


## Task createTasks
Represents call to:
`POST /{organizationKey}/tasks`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `body`: **required** object [NewTask](#model-newtask)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [TaskXL](#model-taskxl)
- `resp`: Http response

## Task getTasksFilterCounts
Represents call to:
`GET /{organizationKey}/tasks/filter/counts`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `involvement`: array
- `duedate`: array
- `processId`: string
- `completed`: boolean
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [TaskCounts](#model-taskcounts)
- `resp`: Http response

## Task deleteTask
Represents call to:
`DELETE /{organizationKey}/tasks/{taskId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `taskId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Task getTask
Represents call to:
`GET /{organizationKey}/tasks/{taskId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `taskId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [TaskXL](#model-taskxl)
- `resp`: Http response

## Task updateTask
Represents call to:
`PUT /{organizationKey}/tasks/{taskId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `taskId`: **required** string
- `body`: **required** object [Task](#model-task)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [TaskXL](#model-taskxl)
- `resp`: Http response

## Task createTaskDocuments
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/documents`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `taskId`: **required** string
- `body`: **required** object [Document](#model-document)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Document](#model-document)
- `resp`: Http response

## Task createTaskDocumentsUpload
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/documents/upload`

**Arguments:**
- `organizationKey`: **required** string
- `taskId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [DocumentFile](#model-documentfile)
- `resp`: Http response

## Task createTaskDocumentsUploadiframe
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/documents/uploadiframe`

**Arguments:**
- `organizationKey`: **required** string
- `taskId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Task deleteTaskDocument
Represents call to:
`DELETE /{organizationKey}/tasks/{taskId}/documents/{documentId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `taskId`: **required** string
- `documentId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Task getTaskDocumentStream
Represents call to:
`GET /{organizationKey}/tasks/{taskId}/documents/{documentId}/stream`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `taskId`: **required** string
- `documentId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [FileStream](#model-filestream)
- `resp`: Http response

## Task getTaskEvents
Represents call to:
`GET /{organizationKey}/tasks/{taskId}/events`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `taskId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Task createTaskEvents
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/events`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `taskId`: **required** string
- `body`: **required** object [CommentRequest](#model-commentrequest)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [CommentAddEvent](#model-commentaddevent)
- `resp`: Http response

## Task createTaskFile
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/files/{fileId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `taskId`: **required** string
- `fileId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [DocumentFile](#model-documentfile)
- `resp`: Http response

## Task updateTaskFormField
Represents call to:
`PUT /{organizationKey}/tasks/{taskId}/form/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `taskId`: **required** string
- `fieldId`: **required** string
- `body`: **required** object [FormField](#model-formfield)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [FormField](#model-formfield)
- `resp`: Http response

## Task getTaskMail
Represents call to:
`GET /{organizationKey}/tasks/{taskId}/mails/{mailId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `taskId`: **required** string
- `mailId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Mail](#model-mail)
- `resp`: Http response

## Task getTaskNext
Represents call to:
`GET /{organizationKey}/tasks/{taskId}/next`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `taskId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Task createTaskSubtasks
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/subtasks`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `taskId`: **required** string
- `body`: **required** object [NewTask](#model-newtask)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [TaskXL](#model-taskxl)
- `resp`: Http response

# Process
**Constructor:**
- `options`
  - `authorization`: string - Authorization token, will be set as Authorization http header
  - `credentials`: object - Default credentials
    - `username`: string - Username
    - `password`: string - Password
  - `basePath`: string - Effektif-api base url, defaults to api endpoint documentation basePath
  - `onUnauthorized`: function - Excecuted when an unauthorized call was made or authorization token is missing. Receives operation arguments and callback
  - `users`: object - Users instance
    - `login`: **required** function - Login function
  - `log`: function - Logging function, defaults to console.log
  - `baseRequest`: function - Default request

## Process getUserInstance

## Process getProcesses
Represents call to:
`GET /{organizationKey}/processes`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processIds`: array
- `callback`: **required** function - function(err, body, resp)


## Process createProcess
Represents call to:
`POST /{organizationKey}/processes`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `body`: **required** object [NewProcess](#model-newprocess)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Process](#model-process)
- `resp`: Http response

## Process createProcessesImport
Represents call to:
`POST /{organizationKey}/processes/import`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `body`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process createProcessesImportJson
Represents call to:
`POST /{organizationKey}/processes/import/json`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `body`: **required** object [Process](#model-process)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Process](#model-process)
- `resp`: Http response

## Process deleteProcess
Represents call to:
`DELETE /{organizationKey}/processes/{processId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `cascade`: boolean
- `callback`: **required** function - function(err, body, resp)


## Process getProcess
Represents call to:
`GET /{organizationKey}/processes/{processId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `include`: string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Process](#model-process)
- `resp`: Http response

## Process updateProcess
Represents call to:
`PUT /{organizationKey}/processes/{processId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `body`: **required** object [Process](#model-process)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Process](#model-process)
- `resp`: Http response

## Process getProcessActivities
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process createProcessActivities
Represents call to:
`POST /{organizationKey}/processes/{processId}/activities`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `body`: **required** object [Activity](#model-activity)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Activity](#model-activity)
- `resp`: Http response

## Process deleteProcessActivity
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/activities/{activityId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process getProcessActivity
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Activity](#model-activity)
- `resp`: Http response

## Process updateProcessActivity
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `body`: **required** object [Activity](#model-activity)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Activity](#model-activity)
- `resp`: Http response

## Process updateProcessActivityConfigurationField
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}/configuration/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `fieldId`: **required** string
- `body`: **required** object [FormField](#model-formfield)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [FormField](#model-formfield)
- `resp`: Http response

## Process getProcessActivityForm
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}/form`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `versionId`: **required** string
- `activityId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Form](#model-form)
- `resp`: Http response

## Process updateProcessActivityForm
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}/form`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `body`: **required** object [Form](#model-form)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Form](#model-form)
- `resp`: Http response

## Process getProcessActivityFormFields
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}/form/fields`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `versionId`: **required** string
- `activityId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process createProcessActivityFormFields
Represents call to:
`POST /{organizationKey}/processes/{processId}/activities/{activityId}/form/fields`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `body`: **required** object [NewFormField](#model-newformfield)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [NewFormField](#model-newformfield)
- `resp`: Http response

## Process deleteProcessActivityFormField
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/activities/{activityId}/form/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `fieldId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process getProcessActivityFormField
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}/form/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `fieldId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [FormField](#model-formfield)
- `resp`: Http response

## Process updateProcessActivityFormField
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}/form/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `fieldId`: **required** string
- `body`: **required** object [FormField](#model-formfield)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [FormField](#model-formfield)
- `resp`: Http response

## Process getProcessActivityParameters
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}/parameters`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process updateProcessActivityParameter
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}/parameters/{parameterKey}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `parameterKey`: **required** string
- `body`: **required** object [Parameter](#model-parameter)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Parameter](#model-parameter)
- `resp`: Http response

## Process getProcessActivityParameterBindables
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}/parameters/{parameterKey}/bindables`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `parameterKey`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process createProcessActivityParameterBindings
Represents call to:
`POST /{organizationKey}/processes/{processId}/activities/{activityId}/parameters/{parameterKey}/bindings`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `parameterKey`: **required** string
- `body`: **required** object [Binding](#model-binding)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Binding](#model-binding)
- `resp`: Http response

## Process deleteProcessActivityParameterBinding
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/activities/{activityId}/parameters/{parameterKey}/bindings/{bindingId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `parameterKey`: **required** string
- `bindingId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process createProcessActivityTest
Represents call to:
`POST /{organizationKey}/processes/{processId}/activities/{activityId}/test`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [JavaScriptResponse](#model-javascriptresponse)
- `resp`: Http response

## Process createProcessActivityVariableMappings
Represents call to:
`POST /{organizationKey}/processes/{processId}/activities/{activityId}/variableMappings`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `body`: **required** object [VariableMapping](#model-variablemapping)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [VariableMapping](#model-variablemapping)
- `resp`: Http response

## Process deleteProcessActivityVariableMappings
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/activities/{activityId}/variableMappings/{variableMappingId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `variableMappingId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process updateProcessActivityVariableMappings
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}/variableMappings/{variableMappingId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `variableMappingId`: **required** string
- `body`: **required** object [VariableMapping](#model-variablemapping)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [VariableMapping](#model-variablemapping)
- `resp`: Http response

## Process getProcessBindables
Represents call to:
`GET /{organizationKey}/processes/{processId}/bindables`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process getProcessCaseColumns
Represents call to:
`GET /{organizationKey}/processes/{processId}/caseColumns`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process createProcessCaseColumns
Represents call to:
`POST /{organizationKey}/processes/{processId}/caseColumns`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `body`: **required** object [CazeColumn](#model-cazecolumn)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [CazeColumn](#model-cazecolumn)
- `resp`: Http response

## Process deleteProcessCaseColumns
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/caseColumns/{columnId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `columnId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process updateProcessCaseColumns
Represents call to:
`PUT /{organizationKey}/processes/{processId}/caseColumns/{columnId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `columnId`: **required** string
- `body`: **required** object [CazeColumn](#model-cazecolumn)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [CazeColumn](#model-cazecolumn)
- `resp`: Http response

## Process createProcessCopy
Represents call to:
`POST /{organizationKey}/processes/{processId}/copy`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Process](#model-process)
- `resp`: Http response

## Process getProcessDiagram
Represents call to:
`GET /{organizationKey}/processes/{processId}/diagram`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Diagram](#model-diagram)
- `resp`: Http response

## Process updateProcessDiagram
Represents call to:
`PUT /{organizationKey}/processes/{processId}/diagram`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `body`: **required** object [Diagram](#model-diagram)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Diagram](#model-diagram)
- `resp`: Http response

## Process getProcessExport
Represents call to:
`GET /{organizationKey}/processes/{processId}/export`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process getProcessExportJson
Represents call to:
`GET /{organizationKey}/processes/{processId}/export/json`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Process](#model-process)
- `resp`: Http response

## Process getProcessTransitions
Represents call to:
`GET /{organizationKey}/processes/{processId}/transitions`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process createProcessTransitions
Represents call to:
`POST /{organizationKey}/processes/{processId}/transitions`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `body`: **required** object [Transition](#model-transition)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Transition](#model-transition)
- `resp`: Http response

## Process deleteProcessTransition
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/transitions/{transitionId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `transitionId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process getProcessTransition
Represents call to:
`GET /{organizationKey}/processes/{processId}/transitions/{transitionId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `transitionId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Transition](#model-transition)
- `resp`: Http response

## Process updateProcessTransition
Represents call to:
`PUT /{organizationKey}/processes/{processId}/transitions/{transitionId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `transitionId`: **required** string
- `body`: **required** object [Transition](#model-transition)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Transition](#model-transition)
- `resp`: Http response

## Process deleteProcessTrigger
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/trigger`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process getProcessTrigger
Represents call to:
`GET /{organizationKey}/processes/{processId}/trigger`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Trigger](#model-trigger)
- `resp`: Http response

## Process updateProcessTrigger
Represents call to:
`PUT /{organizationKey}/processes/{processId}/trigger`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `body`: **required** object [Trigger](#model-trigger)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Trigger](#model-trigger)
- `resp`: Http response

## Process getProcessTriggerForm
Represents call to:
`GET /{organizationKey}/processes/{processId}/trigger/form`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `versionId`: **required** string
- `activityId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Form](#model-form)
- `resp`: Http response

## Process updateProcessTriggerForm
Represents call to:
`PUT /{organizationKey}/processes/{processId}/trigger/form`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `body`: **required** object [Form](#model-form)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Form](#model-form)
- `resp`: Http response

## Process getProcessTriggerFormFields
Represents call to:
`GET /{organizationKey}/processes/{processId}/trigger/form/fields`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `versionId`: **required** string
- `activityId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process createProcessTriggerFormFields
Represents call to:
`POST /{organizationKey}/processes/{processId}/trigger/form/fields`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `body`: **required** object [NewFormField](#model-newformfield)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [NewFormField](#model-newformfield)
- `resp`: Http response

## Process deleteProcessTriggerFormField
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/trigger/form/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `fieldId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process getProcessTriggerFormField
Represents call to:
`GET /{organizationKey}/processes/{processId}/trigger/form/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `fieldId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [FormField](#model-formfield)
- `resp`: Http response

## Process updateProcessTriggerFormField
Represents call to:
`PUT /{organizationKey}/processes/{processId}/trigger/form/fields/{fieldId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `fieldId`: **required** string
- `body`: **required** object [FormField](#model-formfield)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [FormField](#model-formfield)
- `resp`: Http response

## Process getProcessTriggerParameters
Represents call to:
`GET /{organizationKey}/processes/{processId}/trigger/parameters`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `activityId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process getProcessVariables
Represents call to:
`GET /{organizationKey}/processes/{processId}/variables`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process createProcessVariables
Represents call to:
`POST /{organizationKey}/processes/{processId}/variables`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `body`: **required** object [Variable](#model-variable)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Variable](#model-variable)
- `resp`: Http response

## Process deleteProcessVariable
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/variables/{variableId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `variableId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process getProcessVariable
Represents call to:
`GET /{organizationKey}/processes/{processId}/variables/{variableId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `variableId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Variable](#model-variable)
- `resp`: Http response

## Process updateProcessVariable
Represents call to:
`PUT /{organizationKey}/processes/{processId}/variables/{variableId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `variableId`: **required** string
- `body`: **required** object [Variable](#model-variable)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Variable](#model-variable)
- `resp`: Http response

## Process updateProcessVariableType
Represents call to:
`PUT /{organizationKey}/processes/{processId}/variables/{variableId}/type`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `variableId`: **required** string
- `body`: **required** object [Type](#model-type)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Type](#model-type)
- `resp`: Http response

## Process getProcessVersions
Represents call to:
`GET /{organizationKey}/processes/{processId}/versions`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process createProcessVersions
Represents call to:
`POST /{organizationKey}/processes/{processId}/versions`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [ProcessDefinition](#model-processdefinition)
- `resp`: Http response

## Process createProcessVersionPublish
Represents call to:
`POST /{organizationKey}/processes/{processId}/versions/{versionId}/publish`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `versionId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [ProcessDefinition](#model-processdefinition)
- `resp`: Http response

## Process createProcessVersionRestore
Represents call to:
`POST /{organizationKey}/processes/{processId}/versions/{versionId}/restore`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `versionId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Process](#model-process)
- `resp`: Http response

## Process getProcessVersionTriggerForm
Represents call to:
`GET /{organizationKey}/processes/{processId}/versions/{versionId}/trigger/form`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `versionId`: **required** string
- `activityId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Form](#model-form)
- `resp`: Http response

## Process getProcessVersionTriggerFormFields
Represents call to:
`GET /{organizationKey}/processes/{processId}/versions/{versionId}/trigger/form/fields`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `versionId`: **required** string
- `activityId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Process getTemplates
Represents call to:
`GET /{organizationKey}/templates`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `category`: string
- `callback`: **required** function - function(err, body, resp)


# Service
**Constructor:**
- `options`
  - `authorization`: string - Authorization token, will be set as Authorization http header
  - `credentials`: object - Default credentials
    - `username`: string - Username
    - `password`: string - Password
  - `basePath`: string - Effektif-api base url, defaults to api endpoint documentation basePath
  - `onUnauthorized`: function - Excecuted when an unauthorized call was made or authorization token is missing. Receives operation arguments and callback
  - `users`: object - Users instance
    - `login`: **required** function - Login function
  - `log`: function - Logging function, defaults to console.log
  - `baseRequest`: function - Default request

## Service getUserInstance

## Service getOauth_callback
Represents call to:
`GET /oauth_callback`

**Arguments:**
- `state`: string
- `code`: string
- `error`: string
- `callback`: **required** function - function(err, body, resp)


## Service getServiceAccounts
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/accounts`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `serviceKey`: **required** string
- `excludeOwner`: string
- `callback`: **required** function - function(err, body, resp)


## Service createServiceAccounts
Represents call to:
`POST /{organizationKey}/services/{serviceKey}/accounts`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `serviceKey`: **required** string
- `body`: **required** object [Account](#model-account)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Account](#model-account)
- `resp`: Http response

## Service getServiceAccount
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/accounts/{accountId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `serviceKey`: **required** string
- `accountId`: **required** string
- `excludeOwner`: string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Account](#model-account)
- `resp`: Http response

## Service updateServiceAccount
Represents call to:
`PUT /{organizationKey}/services/{serviceKey}/accounts/{accountId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `serviceKey`: **required** string
- `accountId`: **required** string
- `body`: **required** object [Account](#model-account)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [Account](#model-account)
- `resp`: Http response

## Service getServiceAccountOption
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/accounts/{accountId}/options/{optionsKey}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `serviceKey`: **required** string
- `accountId`: **required** string
- `optionsKey`: **required** string
- `excludeOwner`: string
- `callback`: **required** function - function(err, body, resp)


## Service getServiceAccountReferences
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/accounts/{accountId}/references`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `serviceKey`: **required** string
- `accountId`: **required** string
- `q`: string
- `parent`: string
- `pathTo`: string
- `excludeOwner`: string
- `callback`: **required** function - function(err, body, resp)


## Service getServiceOption
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/options/{optionsKey}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `serviceKey`: **required** string
- `accountId`: **required** string
- `optionsKey`: **required** string
- `excludeOwner`: string
- `callback`: **required** function - function(err, body, resp)


## Service getServices
Represents call to:
`GET /{organizationKey}/services`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `callback`: **required** function - function(err, body, resp)


## Service createServicesOauthStart
Represents call to:
`POST /{organizationKey}/services/oauth/start`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `body`: **required** object [OauthStartRequest](#model-oauthstartrequest)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [OauthStartResponse](#model-oauthstartresponse)
- `resp`: Http response

## Service createServiceActionInstancesLock
Represents call to:
`POST /{organizationKey}/services/{serviceKey}/actionInstances/lock`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `serviceKey`: **required** string
- `body`: **required** object [ActionInstance](#model-actioninstance)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [ActionInstance](#model-actioninstance)
- `resp`: Http response

## Service createServiceActionInstancesEnd
Represents call to:
`POST /{organizationKey}/services/{serviceKey}/actionInstances/{actionInstanceId}/end`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `serviceKey`: **required** string
- `actionInstanceId`: **required** string
- `body`: **required** object [ActionInstanceEnd](#model-actioninstanceend)
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [EmptyObject](#model-emptyobject)
- `resp`: Http response

## Service getServiceIcon
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/icon`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `serviceKey`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [FileStream](#model-filestream)
- `resp`: Http response

# Search
**Constructor:**
- `options`
  - `authorization`: string - Authorization token, will be set as Authorization http header
  - `credentials`: object - Default credentials
    - `username`: string - Username
    - `password`: string - Password
  - `basePath`: string - Effektif-api base url, defaults to api endpoint documentation basePath
  - `onUnauthorized`: function - Excecuted when an unauthorized call was made or authorization token is missing. Receives operation arguments and callback
  - `users`: object - Users instance
    - `login`: **required** function - Login function
  - `log`: function - Logging function, defaults to console.log
  - `baseRequest`: function - Default request

## Search getUserInstance

## Search getSearch
Represents call to:
`GET /{organizationKey}/search`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `query`: string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [SearchResult](#model-searchresult)
- `resp`: Http response

# File
**Constructor:**
- `options`
  - `authorization`: string - Authorization token, will be set as Authorization http header
  - `credentials`: object - Default credentials
    - `username`: string - Username
    - `password`: string - Password
  - `basePath`: string - Effektif-api base url, defaults to api endpoint documentation basePath
  - `onUnauthorized`: function - Excecuted when an unauthorized call was made or authorization token is missing. Receives operation arguments and callback
  - `users`: object - Users instance
    - `login`: **required** function - Login function
  - `log`: function - Logging function, defaults to console.log
  - `baseRequest`: function - Default request

## File getUserInstance

## File createFiles
Represents call to:
`POST /{organizationKey}/files`

**Arguments:**
- `organizationKey`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [File](#model-file)
- `resp`: Http response

## File deleteFile
Represents call to:
`DELETE /{organizationKey}/files/{fileId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `fileId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## File getFile
Represents call to:
`GET /{organizationKey}/files/{fileId}`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `fileId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [File](#model-file)
- `resp`: Http response

## File getFileStream
Represents call to:
`GET /{organizationKey}/files/{fileId}/stream`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `fileId`: **required** string
- `callback`: **required** function - function(err, body, resp)


**Callback:**
- `error`: Error or null
- `body`: [FileStream](#model-filestream)
- `resp`: Http response

## File createFilesiframe
Represents call to:
`POST /{organizationKey}/filesiframe`

**Arguments:**
- `organizationKey`: **required** string
- `callback`: **required** function - function(err, body, resp)


# ProcessInstance
**Constructor:**
- `options`
  - `authorization`: string - Authorization token, will be set as Authorization http header
  - `credentials`: object - Default credentials
    - `username`: string - Username
    - `password`: string - Password
  - `basePath`: string - Effektif-api base url, defaults to api endpoint documentation basePath
  - `onUnauthorized`: function - Excecuted when an unauthorized call was made or authorization token is missing. Receives operation arguments and callback
  - `users`: object - Users instance
    - `login`: **required** function - Login function
  - `log`: function - Logging function, defaults to console.log
  - `baseRequest`: function - Default request

## ProcessInstance getUserInstance

## ProcessInstance getProcessInstancesVariables
Represents call to:
`GET /{organizationKey}/processes/{processId}/instances/{processInstanceId}/variables`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `processInstanceId`: **required** string
- `callback`: **required** function - function(err, body, resp)


## ProcessInstance updateProcessInstancesVariables
Represents call to:
`PUT /{organizationKey}/processes/{processId}/instances/{processInstanceId}/variables`

> Requires authorization

**Arguments:**
- `organizationKey`: **required** string
- `processId`: **required** string
- `processInstanceId`: **required** string
- `body`: **required** object [List](#model-list)
- `callback`: **required** function - function(err, body, resp)


# Models

## Model About
- `version`: string
- `buildDate`: string
- `latestCommits`: array string


**Used by:**
[`User.getAbout`](#user-getabout)

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
  - `groupIds`: array string
  - `lastName`: string
  - `ldapDn`: string
  - `mailAddress`: string
  - `licenses`: array any
  - `mailAddressLower`: string
  - `organizationIds`: array string
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
  - `groupIds`: array string
  - `lastName`: string
  - `ldapDn`: string
  - `mailAddress`: string
  - `licenses`: array any
  - `mailAddressLower`: string
  - `organizationIds`: array string
  - `password`: string
  - `preferences`: object
  - `systemAdmin`: boolean
  - `systemUser`: boolean
- `organizations`: array object


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
- `groupIds`: array string
- `lastName`: string
- `ldapDn`: string
- `mailAddress`: string
- `licenses`: array any
- `mailAddressLower`: string
- `organizationIds`: array string
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

## Model Form
- `id`: string
- `activityId`: string
- `button`: string
- `buttons`: array string
- `description`: string
- `fields`: array object
- `fieldsOrder`: array string
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
- `candidateIds`: array string
- `candidateGroupIds`: array string
- `canceled`: boolean
- `completed`: boolean
- `createdBy`: string
- `description`: string
- `documentIds`: array string
- `duedate`: date
- `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array string
  - `description`: string
  - `fields`: array object
  - `fieldsOrder`: array string
  - `organizationId`: string
  - `processId`: string
- `hasForm`: boolean
- `lastUpdated`: date
- `lock`: date
- `name`: string
- `organizationId`: string
- `parent`: any
- `parentId`: string
- `participantIds`: array string
- `processId`: string
- `sandbox`: boolean
- `subtaskIds`: array string
- `uncompletable`: boolean


**Used by:**
[`Task.createProcessTaskname`](#task-createprocesstaskname)
[`Task.updateTask`](#task-updatetask)

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
  - `candidateIds`: array string
  - `candidateGroupIds`: array string
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array string
  - `duedate`: date
  - `form`: object
    - `id`: string
    - `activityId`: string
    - `button`: string
    - `buttons`: array string
    - `description`: string
    - `fields`: array object
    - `fieldsOrder`: array string
    - `organizationId`: string
    - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array string
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array string
  - `uncompletable`: boolean
- `cazeId`: string
- `candidateIds`: array string
- `candidateGroupIds`: array string
- `canceled`: boolean
- `completed`: boolean
- `createdBy`: string
- `description`: string
- `documentIds`: array string
- `duedate`: date
- `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array string
  - `description`: string
  - `fields`: array object
  - `fieldsOrder`: array string
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
  - `candidateIds`: array string
  - `candidateGroupIds`: array string
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array string
  - `duedate`: date
  - `form`: object
    - `id`: string
    - `activityId`: string
    - `button`: string
    - `buttons`: array string
    - `description`: string
    - `fields`: array object
    - `fieldsOrder`: array string
    - `organizationId`: string
    - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array string
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array string
  - `uncompletable`: boolean
- `parentId`: string
- `participantIds`: array string
- `processId`: string
- `sandbox`: boolean
- `subtaskIds`: array string
- `uncompletable`: boolean
- `assignee`: object
  - `id`: string
  - `admin`: boolean
  - `color`: string
  - `created`: date
  - `external`: boolean
  - `firstName`: string
  - `groupIds`: array string
  - `lastName`: string
  - `ldapDn`: string
  - `mailAddress`: string
  - `licenses`: array any
  - `mailAddressLower`: string
  - `organizationIds`: array string
  - `password`: string
  - `preferences`: object
  - `systemAdmin`: boolean
  - `systemUser`: boolean
- `participants`: array object
- `candidates`: array object
- `subtasks`: array object
- `documents`: array object
- `events`: array any


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
  - `candidateIds`: array string
  - `candidateGroupIds`: array string
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array string
  - `duedate`: date
  - `form`: object
    - `id`: string
    - `activityId`: string
    - `button`: string
    - `buttons`: array string
    - `description`: string
    - `fields`: array object
    - `fieldsOrder`: array string
    - `organizationId`: string
    - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array string
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array string
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
  - `fields`: array string
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
- `attachmentIds`: array string
- `bcc`: array string
- `bodyText`: string
- `bodyHtml`: string
- `cc`: array string
- `from`: array string
- `fromName`: string
- `organizationId`: string
- `preview`: string
- `replyTo`: array string
- `source`: string
- `subject`: string
- `sendDate`: date
- `to`: array string


**Used by:**
[`Task.getTaskMail`](#task-gettaskmail)

## Model NewProcess
- `name`: string
- `category`: string
- `trigger`: object
  - `id`: string
  - `access`: any
  - `activities`: array object
  - `activitiesOrder`: array string
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array [Parameter](#model-parameter)
  - `processId`: string
  - `transitions`: array [Transition](#model-transition)
  - `variables`: array [Variable](#model-variable)
- `templateId`: string
- `isPrivate`: boolean


**Used by:**
[`Process.createProcess`](#process-createprocess)

## Model Process
- `id`: string
- `access`: any
- `activities`: array object
- `activitiesOrder`: array string
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array object
- `processId`: string
- `transitions`: array object
- `variables`: array object
- `category`: string
- `caseColumnsOrder`: array string
- `changed`: boolean
- `diagram`: object
  - `id`: string
  - `canvas`: any
  - `edges`: array any
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
  - `activities`: array object
  - `activitiesOrder`: array string
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array [Parameter](#model-parameter)
  - `processId`: string
  - `transitions`: array [Transition](#model-transition)
  - `variables`: array [Variable](#model-variable)


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
- `activities`: array [Activity](#model-activity)
- `activitiesOrder`: array string
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array object
- `processId`: string
- `transitions`: array object
- `variables`: array [Variable](#model-variable)


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
  - `fields`: array string
  - `variableId`: string


**Used by:**
[`Process.createProcessActivityFormFields`](#process-createprocessactivityformfields)
[`Process.createProcessTriggerFormFields`](#process-createprocesstriggerformfields)

## Model Parameter
- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array string
  - `variableId`: string
- `bindings`: array [Binding](#model-binding)
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
- `fields`: array string
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
  - `fields`: array string
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
  - `fields`: array string
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
- `edges`: array any
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
  - `activities`: array [Activity](#model-activity)
  - `activitiesOrder`: array string
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array [Parameter](#model-parameter)
  - `processId`: string
  - `transitions`: array [Transition](#model-transition)
  - `variables`: array [Variable](#model-variable)
- `fromId`: string
- `name`: string
- `organizationId`: string
- `parentId`: string
- `processId`: string
- `to`: object
  - `id`: string
  - `access`: any
  - `activities`: array [Activity](#model-activity)
  - `activitiesOrder`: array string
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array [Parameter](#model-parameter)
  - `processId`: string
  - `transitions`: array [Transition](#model-transition)
  - `variables`: array [Variable](#model-variable)
- `toId`: string


**Used by:**
[`Process.createProcessTransitions`](#process-createprocesstransitions)
[`Process.getProcessTransition`](#process-getprocesstransition)
[`Process.updateProcessTransition`](#process-updateprocesstransition)

## Model Trigger
- `id`: string
- `access`: any
- `activities`: array object
- `activitiesOrder`: array string
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array [Parameter](#model-parameter)
- `processId`: string
- `transitions`: array [Transition](#model-transition)
- `variables`: array [Variable](#model-variable)


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
- `activities`: array object
- `activitiesOrder`: array string
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array [Parameter](#model-parameter)
- `processId`: string
- `transitions`: array [Transition](#model-transition)
- `variables`: array [Variable](#model-variable)
- `created`: date
- `diagram`: object
  - `id`: string
  - `canvas`: any
  - `edges`: array any
  - `version`: number
- `ownerId`: string
- `publisherId`: string
- `sandbox`: boolean
- `trigger`: object
  - `id`: string
  - `access`: any
  - `activities`: array object
  - `activitiesOrder`: array string
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array [Parameter](#model-parameter)
  - `processId`: string
  - `transitions`: array [Transition](#model-transition)
  - `variables`: array [Variable](#model-variable)


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
- `tasks`: array object
- `processes`: array object


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
