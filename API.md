API
===

Table of contents
- [User](#user)
  - [getUserInstance](#user_getuserinstance)
  - [onUnauthorized](#user_onunauthorized)
  - [applyDefaults](#user_applydefaults)
  - [getAbout](#user_getabout)
  - [createLogin](#user_createlogin)
  - [updateLogin](#user_updatelogin)
  - [createRegistrations](#user_createregistrations)
  - [getRegistrations](#user_getregistrations)
  - [createRegistrationsActivate](#user_createregistrationsactivate)
  - [getRegistrationsPicture](#user_getregistrationspicture)
  - [createRegistrationsPicture](#user_createregistrationspicture)
  - [createRegistrationsPictureiframe](#user_createregistrationspictureiframe)
  - [createUsersConfirm](#user_createusersconfirm)
  - [createUsersLogin](#user_createuserslogin)
  - [createUsersLoginHandover](#user_createusersloginhandover)
  - [createUsersReset](#user_createusersreset)
  - [getUsers](#user_getusers)
  - [updateUsers](#user_updateusers)
  - [createUsersPicture](#user_createuserspicture)
  - [createUsersPictureiframe](#user_createuserspictureiframe)
  - [createUsersHandover](#user_createusershandover)
  - [getUsersPicture](#user_getuserspicture)
  - [updateUsersPreferences](#user_updateuserspreferences)
- [Task](#task)
  - [getUserInstance](#task_getuserinstance)
  - [onUnauthorized](#task_onunauthorized)
  - [applyDefaults](#task_applydefaults)
  - [getCases](#task_getcases)
  - [getCasesInfo](#task_getcasesinfo)
  - [getProcessStartForm](#task_getprocessstartform)
  - [createProcessTaskname](#task_createprocesstaskname)
  - [getTasks](#task_gettasks)
  - [headTasks](#task_headtasks)
  - [createTasks](#task_createtasks)
  - [getTasksFilterCounts](#task_gettasksfiltercounts)
  - [deleteTask](#task_deletetask)
  - [getTask](#task_gettask)
  - [updateTask](#task_updatetask)
  - [createTaskDocuments](#task_createtaskdocuments)
  - [createTaskDocumentsUpload](#task_createtaskdocumentsupload)
  - [createTaskDocumentsUploadiframe](#task_createtaskdocumentsuploadiframe)
  - [deleteTaskDocuments](#task_deletetaskdocuments)
  - [getTaskDocumentsStream](#task_gettaskdocumentsstream)
  - [getTaskEvents](#task_gettaskevents)
  - [createTaskEvents](#task_createtaskevents)
  - [createTaskFiles](#task_createtaskfiles)
  - [updateTaskFormField](#task_updatetaskformfield)
  - [getTaskMails](#task_gettaskmails)
  - [getTaskNext](#task_gettasknext)
  - [createTaskSubtasks](#task_createtasksubtasks)
- [Process](#process)
  - [getUserInstance](#process_getuserinstance)
  - [onUnauthorized](#process_onunauthorized)
  - [applyDefaults](#process_applydefaults)
  - [getProcesses](#process_getprocesses)
  - [createProcesses](#process_createprocesses)
  - [createProcessesImport](#process_createprocessesimport)
  - [createProcessesImportJson](#process_createprocessesimportjson)
  - [deleteProcess](#process_deleteprocess)
  - [getProcess](#process_getprocess)
  - [updateProcess](#process_updateprocess)
  - [getProcessActivities](#process_getprocessactivities)
  - [createProcessActivities](#process_createprocessactivities)
  - [deleteProcessActivity](#process_deleteprocessactivity)
  - [getProcessActivity](#process_getprocessactivity)
  - [updateProcessActivity](#process_updateprocessactivity)
  - [updateProcessActivityConfigurationField](#process_updateprocessactivityconfigurationfield)
  - [getProcessActivityForm](#process_getprocessactivityform)
  - [updateProcessActivityForm](#process_updateprocessactivityform)
  - [getProcessActivityFormFields](#process_getprocessactivityformfields)
  - [createProcessActivityFormFields](#process_createprocessactivityformfields)
  - [deleteProcessActivityFormField](#process_deleteprocessactivityformfield)
  - [getProcessActivityFormField](#process_getprocessactivityformfield)
  - [updateProcessActivityFormField](#process_updateprocessactivityformfield)
  - [getProcessActivityParameters](#process_getprocessactivityparameters)
  - [updateProcessActivityParameters](#process_updateprocessactivityparameters)
  - [getProcessActivityParametersBindables](#process_getprocessactivityparametersbindables)
  - [createProcessActivityParametersBindings](#process_createprocessactivityparametersbindings)
  - [deleteProcessActivityParametersBindings](#process_deleteprocessactivityparametersbindings)
  - [createProcessActivityTest](#process_createprocessactivitytest)
  - [createProcessActivityVariableMappings](#process_createprocessactivityvariablemappings)
  - [deleteProcessActivityVariableMappings](#process_deleteprocessactivityvariablemappings)
  - [updateProcessActivityVariableMappings](#process_updateprocessactivityvariablemappings)
  - [getProcessBindables](#process_getprocessbindables)
  - [getProcessCaseColumns](#process_getprocesscasecolumns)
  - [createProcessCaseColumns](#process_createprocesscasecolumns)
  - [deleteProcessCaseColumns](#process_deleteprocesscasecolumns)
  - [updateProcessCaseColumns](#process_updateprocesscasecolumns)
  - [createProcessCopy](#process_createprocesscopy)
  - [getProcessDiagram](#process_getprocessdiagram)
  - [updateProcessDiagram](#process_updateprocessdiagram)
  - [getProcessExport](#process_getprocessexport)
  - [getProcessExportJson](#process_getprocessexportjson)
  - [getProcessTransitions](#process_getprocesstransitions)
  - [createProcessTransitions](#process_createprocesstransitions)
  - [deleteProcessTransition](#process_deleteprocesstransition)
  - [getProcessTransition](#process_getprocesstransition)
  - [updateProcessTransition](#process_updateprocesstransition)
  - [deleteProcessTrigger](#process_deleteprocesstrigger)
  - [getProcessTrigger](#process_getprocesstrigger)
  - [updateProcessTrigger](#process_updateprocesstrigger)
  - [getProcessTriggerForm](#process_getprocesstriggerform)
  - [updateProcessTriggerForm](#process_updateprocesstriggerform)
  - [getProcessTriggerFormFields](#process_getprocesstriggerformfields)
  - [createProcessTriggerFormFields](#process_createprocesstriggerformfields)
  - [deleteProcessTriggerFormField](#process_deleteprocesstriggerformfield)
  - [getProcessTriggerFormField](#process_getprocesstriggerformfield)
  - [updateProcessTriggerFormField](#process_updateprocesstriggerformfield)
  - [getProcessTriggerParameters](#process_getprocesstriggerparameters)
  - [getProcessVariables](#process_getprocessvariables)
  - [createProcessVariables](#process_createprocessvariables)
  - [deleteProcessVariables](#process_deleteprocessvariables)
  - [updateProcessVariables](#process_updateprocessvariables)
  - [updateProcessVariablesType](#process_updateprocessvariablestype)
  - [getProcessVersions](#process_getprocessversions)
  - [createProcessVersions](#process_createprocessversions)
  - [createProcessVersionPublish](#process_createprocessversionpublish)
  - [createProcessVersionRestore](#process_createprocessversionrestore)
  - [getProcessVersionTriggerForm](#process_getprocessversiontriggerform)
  - [getProcessVersionTriggerFormFields](#process_getprocessversiontriggerformfields)
  - [getTemplates](#process_gettemplates)
- [Service](#service)
  - [getUserInstance](#service_getuserinstance)
  - [onUnauthorized](#service_onunauthorized)
  - [applyDefaults](#service_applydefaults)
  - [getOauth_callback](#service_getoauth_callback)
  - [getServicesAccounts](#service_getservicesaccounts)
  - [createServicesAccounts](#service_createservicesaccounts)
  - [updateServicesAccounts](#service_updateservicesaccounts)
  - [getServicesAccountsOptions](#service_getservicesaccountsoptions)
  - [getServicesAccountsReferences](#service_getservicesaccountsreferences)
  - [getServicesOptions](#service_getservicesoptions)
  - [getServices](#service_getservices)
  - [createServicesOauthStart](#service_createservicesoauthstart)
  - [createServicesActionInstancesLock](#service_createservicesactioninstanceslock)
  - [createServicesActionInstancesEnd](#service_createservicesactioninstancesend)
  - [getServicesIcon](#service_getservicesicon)
- [Search](#search)
  - [getUserInstance](#search_getuserinstance)
  - [onUnauthorized](#search_onunauthorized)
  - [applyDefaults](#search_applydefaults)
  - [getSearch](#search_getsearch)
- [File](#file)
  - [getUserInstance](#file_getuserinstance)
  - [onUnauthorized](#file_onunauthorized)
  - [applyDefaults](#file_applydefaults)
  - [createFiles](#file_createfiles)
  - [deleteFiles](#file_deletefiles)
  - [getFiles](#file_getfiles)
  - [getFilesStream](#file_getfilesstream)
  - [createFilesiframe](#file_createfilesiframe)
- [ProcessInstance](#processinstance)
  - [getUserInstance](#processinstance_getuserinstance)
  - [onUnauthorized](#processinstance_onunauthorized)
  - [applyDefaults](#processinstance_applydefaults)
  - [getProcessInstancesVariables](#processinstance_getprocessinstancesvariables)
  - [updateProcessInstancesVariables](#processinstance_updateprocessinstancesvariables)

# User

## User getUserInstance

## User onUnauthorized

## User applyDefaults

## User getAbout
Represents call to:
`GET /about`
> Requires authorization

*Arguments:*

- `callback`: required func - function(err, resp, body)

*Callback body:*

- `version`: string
- `buildDate`: string
- `latestCommits`: array

## User createLogin
Represents call to:
`POST /login/{providerKey}`

*Arguments:*

- `providerKey`: required string
- `body`: required object [ServiceLogin](#user-servicelogin)
  - `stateReference`: string
  - `authenticationUrl`: string
  - `token`: string
  - `redirectTo`: string
  - `hostname`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `stateReference`: string
- `authenticationUrl`: string
- `token`: string
- `redirectTo`: string
- `hostname`: string

## User updateLogin
Represents call to:
`PUT /login/{providerKey}`

*Arguments:*

- `providerKey`: required string
- `code`: string
- `state`: string
- `error`: string
- `error_description`: string
- `body`: required object [ServiceLogin](#user-servicelogin)
  - `stateReference`: string
  - `authenticationUrl`: string
  - `token`: string
  - `redirectTo`: string
  - `hostname`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `stateReference`: string
- `authenticationUrl`: string
- `token`: string
- `redirectTo`: string
- `hostname`: string

## User createRegistrations
Represents call to:
`POST /registrations`

*Arguments:*

- `body`: required object [NewRegistration](#user-newregistration)
  - `mailAddress`: string
  - `firstName`: string
  - `lastName`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*


## User getRegistrations
Represents call to:
`GET /registrations/{code}`

*Arguments:*

- `code`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

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
  - `groupIds`: array
  - `lastName`: string
  - `ldapDn`: string
  - `mailAddress`: string
  - `licenses`: array
  - `mailAddressLower`: string
  - `organizationIds`: array
  - `password`: string
  - `preferences`: object
  - `systemAdmin`: boolean
  - `systemUser`: boolean

## User createRegistrationsActivate
Represents call to:
`POST /registrations/{code}/activate`

*Arguments:*

- `code`: required string
- `body`: required object [ActivationRequest](#user-activationrequest)
  - `password`: string
  - `firstName`: string
  - `lastName`: string
  - `organizationName`: string
  - `color`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `token`: string
- `user`: object
  - `id`: string
  - `admin`: boolean
  - `color`: string
  - `created`: date
  - `external`: boolean
  - `firstName`: string
  - `groupIds`: array
  - `lastName`: string
  - `ldapDn`: string
  - `mailAddress`: string
  - `licenses`: array
  - `mailAddressLower`: string
  - `organizationIds`: array
  - `password`: string
  - `preferences`: object
  - `systemAdmin`: boolean
  - `systemUser`: boolean
- `organizations`: array

## User getRegistrationsPicture
Represents call to:
`GET /registrations/{code}/picture`

*Arguments:*

- `code`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `inputStream`: any
- `contentType`: string
- `contentDispositionInlineFileName`: string
- `cacheControlMaxAgeInMillis`: number

## User createRegistrationsPicture
Represents call to:
`POST /registrations/{code}/picture`

*Arguments:*

- `code`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*


## User createRegistrationsPictureiframe
Represents call to:
`POST /registrations/{code}/pictureiframe`

*Arguments:*

- `code`: required string
- `callback`: required func - function(err, resp, body)

## User createUsersConfirm
Represents call to:
`POST /users/confirm`

*Arguments:*

- `body`: required object [PasswordResetConfirmation](#user-passwordresetconfirmation)
  - `code`: string
  - `password`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `token`: string
- `user`: object
  - `id`: string
  - `admin`: boolean
  - `color`: string
  - `created`: date
  - `external`: boolean
  - `firstName`: string
  - `groupIds`: array
  - `lastName`: string
  - `ldapDn`: string
  - `mailAddress`: string
  - `licenses`: array
  - `mailAddressLower`: string
  - `organizationIds`: array
  - `password`: string
  - `preferences`: object
  - `systemAdmin`: boolean
  - `systemUser`: boolean
- `organizations`: array

## User createUsersLogin
Represents call to:
`POST /users/login`

*Arguments:*

- `body`: required object [LoginRequest](#user-loginrequest)
  - `mailAddress`: string
  - `password`: string
  - `token`: string
  - `hostname`: string
  - `path`: string
  - `organizationKey`: string
- `callback`: required func - function(err, resp, body)

## User createUsersLoginHandover
Represents call to:
`POST /users/login/handover`

*Arguments:*

- `body`: required object [HandoverLogin](#user-handoverlogin)
  - `reference`: string
  - `token`: string
  - `redirectTo`: string
  - `organizationKey`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `reference`: string
- `token`: string
- `redirectTo`: string
- `organizationKey`: string

## User createUsersReset
Represents call to:
`POST /users/reset`

*Arguments:*

- `body`: required object [UserMailAddress](#user-usermailaddress)
  - `mailAddress`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*


## User getUsers
Represents call to:
`GET /{organizationKey}/users/{userId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `userId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `admin`: boolean
- `color`: string
- `created`: date
- `external`: boolean
- `firstName`: string
- `groupIds`: array
- `lastName`: string
- `ldapDn`: string
- `mailAddress`: string
- `licenses`: array
- `mailAddressLower`: string
- `organizationIds`: array
- `password`: string
- `preferences`: object
- `systemAdmin`: boolean
- `systemUser`: boolean

## User updateUsers
Represents call to:
`PUT /{organizationKey}/users/{userId}`

*Arguments:*

- `userId`: required string
- `body`: required object [User](#user-user)
  - `id`: string
  - `admin`: boolean
  - `color`: string
  - `created`: date
  - `external`: boolean
  - `firstName`: string
  - `groupIds`: array
  - `lastName`: string
  - `ldapDn`: string
  - `mailAddress`: string
  - `licenses`: array
  - `mailAddressLower`: string
  - `organizationIds`: array
  - `password`: string
  - `preferences`: object
  - `systemAdmin`: boolean
  - `systemUser`: boolean
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `admin`: boolean
- `color`: string
- `created`: date
- `external`: boolean
- `firstName`: string
- `groupIds`: array
- `lastName`: string
- `ldapDn`: string
- `mailAddress`: string
- `licenses`: array
- `mailAddressLower`: string
- `organizationIds`: array
- `password`: string
- `preferences`: object
- `systemAdmin`: boolean
- `systemUser`: boolean

## User createUsersPicture
Represents call to:
`POST /{organizationKey}/users/{userId}/picture`

*Arguments:*

- `userId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*


## User createUsersPictureiframe
Represents call to:
`POST /{organizationKey}/users/{userId}/pictureiframe`

*Arguments:*

- `userId`: required string
- `callback`: required func - function(err, resp, body)

## User createUsersHandover
Represents call to:
`POST /{organizationKey}/users/{userId}/handover`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `userId`: required string
- `body`: required object [HandoverLogin](#user-handoverlogin)
  - `reference`: string
  - `token`: string
  - `redirectTo`: string
  - `organizationKey`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `reference`: string
- `token`: string
- `redirectTo`: string
- `organizationKey`: string

## User getUsersPicture
Represents call to:
`GET /{organizationKey}/users/{userId}/picture`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `userId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `inputStream`: any
- `contentType`: string
- `contentDispositionInlineFileName`: string
- `cacheControlMaxAgeInMillis`: number

## User updateUsersPreferences
Represents call to:
`PUT /{workspaceKey}/users/{userId}/preferences`
> Requires authorization

*Arguments:*

- `body`: required object [Map](#user-map)
- `callback`: required func - function(err, resp, body)

# Task

## Task getUserInstance

## Task onUnauthorized

## Task applyDefaults

## Task getCases
Represents call to:
`GET /{organizationKey}/cases`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `process`: string
- `completed`: boolean
- `callback`: required func - function(err, resp, body)

## Task getCasesInfo
Represents call to:
`GET /{organizationKey}/cases/info`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `callback`: required func - function(err, resp, body)

## Task getProcessStartForm
Represents call to:
`GET /{organizationKey}/processes/{processId}/startForm`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `activityId`: string
- `button`: string
- `buttons`: array
- `description`: string
- `fields`: array
- `fieldsOrder`: array
- `organizationId`: string
- `processId`: string

## Task createProcessTaskname
Represents call to:
`POST /{organizationKey}/processes/{processId}/taskname`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `assigneeId`: string
- `caze`: any
- `cazeId`: string
- `candidateIds`: array
- `candidateGroupIds`: array
- `canceled`: boolean
- `completed`: boolean
- `createdBy`: string
- `description`: string
- `documentIds`: array
- `duedate`: date
- `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
  - `organizationId`: string
  - `processId`: string
- `hasForm`: boolean
- `lastUpdated`: date
- `lock`: date
- `name`: string
- `organizationId`: string
- `parent`: any
- `parentId`: string
- `participantIds`: array
- `processId`: string
- `sandbox`: boolean
- `subtaskIds`: array
- `uncompletable`: boolean

## Task getTasks
Represents call to:
`GET /{organizationKey}/tasks`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `involvement`: array
- `duedate`: array
- `process`: string
- `completed`: boolean
- `callback`: required func - function(err, resp, body)

## Task headTasks
Represents call to:
`HEAD /{organizationKey}/tasks`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `involvement`: array
- `duedate`: array
- `completed`: boolean
- `processId`: string
- `callback`: required func - function(err, resp, body)

## Task createTasks
Represents call to:
`POST /{organizationKey}/tasks`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `body`: required object [NewTask](#task-newtask)
  - `parentId`: string
  - `assigneeId`: string
  - `processId`: string
  - `name`: string
  - `triggerData`: any
  - `sandbox`: boolean
  - `isPrivate`: boolean
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `assigneeId`: string
- `caze`: object
  - `id`: string
  - `access`: any
  - `assigneeId`: string
  - `caze`: any
  - `cazeId`: string
  - `candidateIds`: array
  - `candidateGroupIds`: array
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array
  - `duedate`: date
  - `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
  - `organizationId`: string
  - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array
  - `uncompletable`: boolean
- `cazeId`: string
- `candidateIds`: array
- `candidateGroupIds`: array
- `canceled`: boolean
- `completed`: boolean
- `createdBy`: string
- `description`: string
- `documentIds`: array
- `duedate`: date
- `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
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
  - `candidateIds`: array
  - `candidateGroupIds`: array
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array
  - `duedate`: date
  - `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
  - `organizationId`: string
  - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array
  - `uncompletable`: boolean
- `parentId`: string
- `participantIds`: array
- `processId`: string
- `sandbox`: boolean
- `subtaskIds`: array
- `uncompletable`: boolean
- `assignee`: object
  - `id`: string
  - `admin`: boolean
  - `color`: string
  - `created`: date
  - `external`: boolean
  - `firstName`: string
  - `groupIds`: array
  - `lastName`: string
  - `ldapDn`: string
  - `mailAddress`: string
  - `licenses`: array
  - `mailAddressLower`: string
  - `organizationIds`: array
  - `password`: string
  - `preferences`: object
  - `systemAdmin`: boolean
  - `systemUser`: boolean
- `participants`: array
- `candidates`: array
- `subtasks`: array
- `documents`: array
- `events`: array

## Task getTasksFilterCounts
Represents call to:
`GET /{organizationKey}/tasks/filter/counts`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `involvement`: array
- `duedate`: array
- `processId`: string
- `completed`: boolean
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `involvementCount`: any
- `processCount`: object

## Task deleteTask
Represents call to:
`DELETE /{organizationKey}/tasks/{taskId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `taskId`: required string
- `callback`: required func - function(err, resp, body)

## Task getTask
Represents call to:
`GET /{organizationKey}/tasks/{taskId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `taskId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `assigneeId`: string
- `caze`: object
  - `id`: string
  - `access`: any
  - `assigneeId`: string
  - `caze`: any
  - `cazeId`: string
  - `candidateIds`: array
  - `candidateGroupIds`: array
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array
  - `duedate`: date
  - `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
  - `organizationId`: string
  - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array
  - `uncompletable`: boolean
- `cazeId`: string
- `candidateIds`: array
- `candidateGroupIds`: array
- `canceled`: boolean
- `completed`: boolean
- `createdBy`: string
- `description`: string
- `documentIds`: array
- `duedate`: date
- `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
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
  - `candidateIds`: array
  - `candidateGroupIds`: array
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array
  - `duedate`: date
  - `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
  - `organizationId`: string
  - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array
  - `uncompletable`: boolean
- `parentId`: string
- `participantIds`: array
- `processId`: string
- `sandbox`: boolean
- `subtaskIds`: array
- `uncompletable`: boolean
- `assignee`: object
  - `id`: string
  - `admin`: boolean
  - `color`: string
  - `created`: date
  - `external`: boolean
  - `firstName`: string
  - `groupIds`: array
  - `lastName`: string
  - `ldapDn`: string
  - `mailAddress`: string
  - `licenses`: array
  - `mailAddressLower`: string
  - `organizationIds`: array
  - `password`: string
  - `preferences`: object
  - `systemAdmin`: boolean
  - `systemUser`: boolean
- `participants`: array
- `candidates`: array
- `subtasks`: array
- `documents`: array
- `events`: array

## Task updateTask
Represents call to:
`PUT /{organizationKey}/tasks/{taskId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `taskId`: required string
- `body`: required object [Task](#task-task)
  - `id`: string
  - `access`: any
  - `assigneeId`: string
  - `caze`: any
  - `cazeId`: string
  - `candidateIds`: array
  - `candidateGroupIds`: array
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array
  - `duedate`: date
  - `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
  - `organizationId`: string
  - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array
  - `uncompletable`: boolean
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `assigneeId`: string
- `caze`: object
  - `id`: string
  - `access`: any
  - `assigneeId`: string
  - `caze`: any
  - `cazeId`: string
  - `candidateIds`: array
  - `candidateGroupIds`: array
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array
  - `duedate`: date
  - `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
  - `organizationId`: string
  - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array
  - `uncompletable`: boolean
- `cazeId`: string
- `candidateIds`: array
- `candidateGroupIds`: array
- `canceled`: boolean
- `completed`: boolean
- `createdBy`: string
- `description`: string
- `documentIds`: array
- `duedate`: date
- `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
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
  - `candidateIds`: array
  - `candidateGroupIds`: array
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array
  - `duedate`: date
  - `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
  - `organizationId`: string
  - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array
  - `uncompletable`: boolean
- `parentId`: string
- `participantIds`: array
- `processId`: string
- `sandbox`: boolean
- `subtaskIds`: array
- `uncompletable`: boolean
- `assignee`: object
  - `id`: string
  - `admin`: boolean
  - `color`: string
  - `created`: date
  - `external`: boolean
  - `firstName`: string
  - `groupIds`: array
  - `lastName`: string
  - `ldapDn`: string
  - `mailAddress`: string
  - `licenses`: array
  - `mailAddressLower`: string
  - `organizationIds`: array
  - `password`: string
  - `preferences`: object
  - `systemAdmin`: boolean
  - `systemUser`: boolean
- `participants`: array
- `candidates`: array
- `subtasks`: array
- `documents`: array
- `events`: array

## Task createTaskDocuments
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/documents`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `taskId`: required string
- `body`: required object [Document](#task-document)
  - `id`: string
  - `created`: date
  - `name`: string
  - `organizationId`: string
  - `ownerId`: string
  - `taskId`: string
  - `url`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `created`: date
- `name`: string
- `organizationId`: string
- `ownerId`: string
- `taskId`: string
- `url`: string

## Task createTaskDocumentsUpload
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/documents/upload`

*Arguments:*

- `organizationKey`: required string
- `taskId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `created`: date
- `name`: string
- `organizationId`: string
- `ownerId`: string
- `taskId`: string
- `url`: string
- `mimeType`: string

## Task createTaskDocumentsUploadiframe
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/documents/uploadiframe`

*Arguments:*

- `organizationKey`: required string
- `taskId`: required string
- `callback`: required func - function(err, resp, body)

## Task deleteTaskDocuments
Represents call to:
`DELETE /{organizationKey}/tasks/{taskId}/documents/{documentId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `taskId`: required string
- `documentId`: required string
- `callback`: required func - function(err, resp, body)

## Task getTaskDocumentsStream
Represents call to:
`GET /{organizationKey}/tasks/{taskId}/documents/{documentId}/stream`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `taskId`: required string
- `documentId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `inputStream`: any
- `contentType`: string
- `contentDispositionInlineFileName`: string
- `cacheControlMaxAgeInMillis`: number

## Task getTaskEvents
Represents call to:
`GET /{organizationKey}/tasks/{taskId}/events`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `taskId`: required string
- `callback`: required func - function(err, resp, body)

## Task createTaskEvents
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/events`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `taskId`: required string
- `body`: required object [CommentRequest](#task-commentrequest)
  - `cazeId`: string
  - `message`: string
  - `taskId`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `cazeId`: string
- `name`: string
- `task`: object
  - `id`: string
  - `access`: any
  - `assigneeId`: string
  - `caze`: any
  - `cazeId`: string
  - `candidateIds`: array
  - `candidateGroupIds`: array
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array
  - `duedate`: date
  - `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
  - `organizationId`: string
  - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array
  - `uncompletable`: boolean
- `taskId`: string
- `time`: date
- `userId`: string
- `message`: string

## Task createTaskFiles
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/files/{fileId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `taskId`: required string
- `fileId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `created`: date
- `name`: string
- `organizationId`: string
- `ownerId`: string
- `taskId`: string
- `url`: string
- `mimeType`: string

## Task updateTaskFormField
Represents call to:
`PUT /{organizationKey}/tasks/{taskId}/form/fields/{fieldId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `taskId`: required string
- `fieldId`: required string
- `body`: required object [FormField](#task-formfield)
  - `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
  - `id`: string
  - `key`: string
  - `name`: string
  - `readOnly`: boolean
  - `required`: boolean
  - `type`: object
  - `value`: any
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
- `id`: string
- `key`: string
- `name`: string
- `readOnly`: boolean
- `required`: boolean
- `type`: object
- `value`: any

## Task getTaskMails
Represents call to:
`GET /{organizationKey}/tasks/{taskId}/mails/{mailId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `taskId`: required string
- `mailId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `attachmentIds`: array
- `bcc`: array
- `bodyText`: string
- `bodyHtml`: string
- `cc`: array
- `from`: array
- `fromName`: string
- `organizationId`: string
- `preview`: string
- `replyTo`: array
- `source`: string
- `subject`: string
- `sendDate`: date
- `to`: array

## Task getTaskNext
Represents call to:
`GET /{organizationKey}/tasks/{taskId}/next`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `taskId`: required string
- `callback`: required func - function(err, resp, body)

## Task createTaskSubtasks
Represents call to:
`POST /{organizationKey}/tasks/{taskId}/subtasks`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `taskId`: required string
- `body`: required object [NewTask](#task-newtask)
  - `parentId`: string
  - `assigneeId`: string
  - `processId`: string
  - `name`: string
  - `triggerData`: any
  - `sandbox`: boolean
  - `isPrivate`: boolean
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `assigneeId`: string
- `caze`: object
  - `id`: string
  - `access`: any
  - `assigneeId`: string
  - `caze`: any
  - `cazeId`: string
  - `candidateIds`: array
  - `candidateGroupIds`: array
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array
  - `duedate`: date
  - `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
  - `organizationId`: string
  - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array
  - `uncompletable`: boolean
- `cazeId`: string
- `candidateIds`: array
- `candidateGroupIds`: array
- `canceled`: boolean
- `completed`: boolean
- `createdBy`: string
- `description`: string
- `documentIds`: array
- `duedate`: date
- `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
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
  - `candidateIds`: array
  - `candidateGroupIds`: array
  - `canceled`: boolean
  - `completed`: boolean
  - `createdBy`: string
  - `description`: string
  - `documentIds`: array
  - `duedate`: date
  - `form`: object
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
  - `organizationId`: string
  - `processId`: string
  - `hasForm`: boolean
  - `lastUpdated`: date
  - `lock`: date
  - `name`: string
  - `organizationId`: string
  - `parent`: any
  - `parentId`: string
  - `participantIds`: array
  - `processId`: string
  - `sandbox`: boolean
  - `subtaskIds`: array
  - `uncompletable`: boolean
- `parentId`: string
- `participantIds`: array
- `processId`: string
- `sandbox`: boolean
- `subtaskIds`: array
- `uncompletable`: boolean
- `assignee`: object
  - `id`: string
  - `admin`: boolean
  - `color`: string
  - `created`: date
  - `external`: boolean
  - `firstName`: string
  - `groupIds`: array
  - `lastName`: string
  - `ldapDn`: string
  - `mailAddress`: string
  - `licenses`: array
  - `mailAddressLower`: string
  - `organizationIds`: array
  - `password`: string
  - `preferences`: object
  - `systemAdmin`: boolean
  - `systemUser`: boolean
- `participants`: array
- `candidates`: array
- `subtasks`: array
- `documents`: array
- `events`: array

# Process

## Process getUserInstance

## Process onUnauthorized

## Process applyDefaults

## Process getProcesses
Represents call to:
`GET /{organizationKey}/processes`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processIds`: array
- `callback`: required func - function(err, resp, body)

## Process createProcesses
Represents call to:
`POST /{organizationKey}/processes`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `body`: required object [NewProcess](#process-newprocess)
  - `name`: string
  - `category`: string
  - `trigger`: object
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
  - `templateId`: string
  - `isPrivate`: boolean
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `activities`: array
- `activitiesOrder`: array
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array
- `processId`: string
- `transitions`: array
- `variables`: array
- `category`: string
- `caseColumnsOrder`: array
- `changed`: boolean
- `diagram`: object
  - `id`: string
  - `canvas`: any
  - `edges`: array
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
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array

## Process createProcessesImport
Represents call to:
`POST /{organizationKey}/processes/import`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `body`: required string [string](#process-string)
- `callback`: required func - function(err, resp, body)

## Process createProcessesImportJson
Represents call to:
`POST /{organizationKey}/processes/import/json`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `body`: required object [Process](#process-process)
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
  - `category`: string
  - `caseColumnsOrder`: array
  - `changed`: boolean
  - `diagram`: object
  - `id`: string
  - `canvas`: any
  - `edges`: array
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
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `activities`: array
- `activitiesOrder`: array
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array
- `processId`: string
- `transitions`: array
- `variables`: array
- `category`: string
- `caseColumnsOrder`: array
- `changed`: boolean
- `diagram`: object
  - `id`: string
  - `canvas`: any
  - `edges`: array
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
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array

## Process deleteProcess
Represents call to:
`DELETE /{organizationKey}/processes/{processId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `cascade`: boolean
- `callback`: required func - function(err, resp, body)

## Process getProcess
Represents call to:
`GET /{organizationKey}/processes/{processId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `include`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `activities`: array
- `activitiesOrder`: array
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array
- `processId`: string
- `transitions`: array
- `variables`: array
- `category`: string
- `caseColumnsOrder`: array
- `changed`: boolean
- `diagram`: object
  - `id`: string
  - `canvas`: any
  - `edges`: array
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
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array

## Process updateProcess
Represents call to:
`PUT /{organizationKey}/processes/{processId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `body`: required object [Process](#process-process)
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
  - `category`: string
  - `caseColumnsOrder`: array
  - `changed`: boolean
  - `diagram`: object
  - `id`: string
  - `canvas`: any
  - `edges`: array
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
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `activities`: array
- `activitiesOrder`: array
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array
- `processId`: string
- `transitions`: array
- `variables`: array
- `category`: string
- `caseColumnsOrder`: array
- `changed`: boolean
- `diagram`: object
  - `id`: string
  - `canvas`: any
  - `edges`: array
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
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array

## Process getProcessActivities
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `callback`: required func - function(err, resp, body)

## Process createProcessActivities
Represents call to:
`POST /{organizationKey}/processes/{processId}/activities`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `body`: required object [Activity](#process-activity)
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `activities`: array
- `activitiesOrder`: array
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array
- `processId`: string
- `transitions`: array
- `variables`: array

## Process deleteProcessActivity
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/activities/{activityId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `callback`: required func - function(err, resp, body)

## Process getProcessActivity
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `activities`: array
- `activitiesOrder`: array
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array
- `processId`: string
- `transitions`: array
- `variables`: array

## Process updateProcessActivity
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `body`: required object [Activity](#process-activity)
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `activities`: array
- `activitiesOrder`: array
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array
- `processId`: string
- `transitions`: array
- `variables`: array

## Process updateProcessActivityConfigurationField
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}/configuration/fields/{fieldId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `fieldId`: required string
- `body`: required object [FormField](#process-formfield)
  - `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
  - `id`: string
  - `key`: string
  - `name`: string
  - `readOnly`: boolean
  - `required`: boolean
  - `type`: object
  - `value`: any
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
- `id`: string
- `key`: string
- `name`: string
- `readOnly`: boolean
- `required`: boolean
- `type`: object
- `value`: any

## Process getProcessActivityForm
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}/form`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `versionId`: required string
- `activityId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `activityId`: string
- `button`: string
- `buttons`: array
- `description`: string
- `fields`: array
- `fieldsOrder`: array
- `organizationId`: string
- `processId`: string

## Process updateProcessActivityForm
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}/form`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `body`: required object [Form](#process-form)
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
  - `organizationId`: string
  - `processId`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `activityId`: string
- `button`: string
- `buttons`: array
- `description`: string
- `fields`: array
- `fieldsOrder`: array
- `organizationId`: string
- `processId`: string

## Process getProcessActivityFormFields
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}/form/fields`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `versionId`: required string
- `activityId`: required string
- `callback`: required func - function(err, resp, body)

## Process createProcessActivityFormFields
Represents call to:
`POST /{organizationKey}/processes/{processId}/activities/{activityId}/form/fields`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `body`: required object [NewFormField](#process-newformfield)
  - `id`: string
  - `key`: string
  - `name`: string
  - `readOnly`: boolean
  - `required`: boolean
  - `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `key`: string
- `name`: string
- `readOnly`: boolean
- `required`: boolean
- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string

## Process deleteProcessActivityFormField
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/activities/{activityId}/form/fields/{fieldId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `fieldId`: required string
- `callback`: required func - function(err, resp, body)

## Process getProcessActivityFormField
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}/form/fields/{fieldId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `fieldId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
- `id`: string
- `key`: string
- `name`: string
- `readOnly`: boolean
- `required`: boolean
- `type`: object
- `value`: any

## Process updateProcessActivityFormField
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}/form/fields/{fieldId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `fieldId`: required string
- `body`: required object [FormField](#process-formfield)
  - `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
  - `id`: string
  - `key`: string
  - `name`: string
  - `readOnly`: boolean
  - `required`: boolean
  - `type`: object
  - `value`: any
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
- `id`: string
- `key`: string
- `name`: string
- `readOnly`: boolean
- `required`: boolean
- `type`: object
- `value`: any

## Process getProcessActivityParameters
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}/parameters`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `callback`: required func - function(err, resp, body)

## Process updateProcessActivityParameters
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}/parameters/{parameterKey}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `parameterKey`: required string
- `body`: required object [Parameter](#process-parameter)
  - `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
  - `bindings`: array
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
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
- `bindings`: array
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

## Process getProcessActivityParametersBindables
Represents call to:
`GET /{organizationKey}/processes/{processId}/activities/{activityId}/parameters/{parameterKey}/bindables`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `parameterKey`: required string
- `callback`: required func - function(err, resp, body)

## Process createProcessActivityParametersBindings
Represents call to:
`POST /{organizationKey}/processes/{processId}/activities/{activityId}/parameters/{parameterKey}/bindings`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `parameterKey`: required string
- `body`: required object [Binding](#process-binding)
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `converter`: string
- `fields`: array
- `variableId`: string

## Process deleteProcessActivityParametersBindings
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/activities/{activityId}/parameters/{parameterKey}/bindings/{bindingId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `parameterKey`: required string
- `bindingId`: required string
- `callback`: required func - function(err, resp, body)

## Process createProcessActivityTest
Represents call to:
`POST /{organizationKey}/processes/{processId}/activities/{activityId}/test`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `variableUpdates`: object
- `logs`: string
- `error`: boolean

## Process createProcessActivityVariableMappings
Represents call to:
`POST /{organizationKey}/processes/{processId}/activities/{activityId}/variableMappings`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `body`: required object [VariableMapping](#process-variablemapping)
  - `id`: string
  - `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
  - `scriptName`: string
  - `testValue`: any
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
- `scriptName`: string
- `testValue`: any

## Process deleteProcessActivityVariableMappings
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/activities/{activityId}/variableMappings/{variableMappingId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `variableMappingId`: required string
- `callback`: required func - function(err, resp, body)

## Process updateProcessActivityVariableMappings
Represents call to:
`PUT /{organizationKey}/processes/{processId}/activities/{activityId}/variableMappings/{variableMappingId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `variableMappingId`: required string
- `body`: required object [VariableMapping](#process-variablemapping)
  - `id`: string
  - `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
  - `scriptName`: string
  - `testValue`: any
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
- `scriptName`: string
- `testValue`: any

## Process getProcessBindables
Represents call to:
`GET /{organizationKey}/processes/{processId}/bindables`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `callback`: required func - function(err, resp, body)

## Process getProcessCaseColumns
Represents call to:
`GET /{organizationKey}/processes/{processId}/caseColumns`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `callback`: required func - function(err, resp, body)

## Process createProcessCaseColumns
Represents call to:
`POST /{organizationKey}/processes/{processId}/caseColumns`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `body`: required object [CazeColumn](#process-cazecolumn)
  - `id`: string
  - `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
  - `custom`: boolean
  - `hidden`: boolean
  - `name`: string
  - `organizationId`: string
  - `processId`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
- `custom`: boolean
- `hidden`: boolean
- `name`: string
- `organizationId`: string
- `processId`: string

## Process deleteProcessCaseColumns
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/caseColumns/{columnId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `columnId`: required string
- `callback`: required func - function(err, resp, body)

## Process updateProcessCaseColumns
Represents call to:
`PUT /{organizationKey}/processes/{processId}/caseColumns/{columnId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `columnId`: required string
- `body`: required object [CazeColumn](#process-cazecolumn)
  - `id`: string
  - `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
  - `custom`: boolean
  - `hidden`: boolean
  - `name`: string
  - `organizationId`: string
  - `processId`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
- `custom`: boolean
- `hidden`: boolean
- `name`: string
- `organizationId`: string
- `processId`: string

## Process createProcessCopy
Represents call to:
`POST /{organizationKey}/processes/{processId}/copy`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `activities`: array
- `activitiesOrder`: array
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array
- `processId`: string
- `transitions`: array
- `variables`: array
- `category`: string
- `caseColumnsOrder`: array
- `changed`: boolean
- `diagram`: object
  - `id`: string
  - `canvas`: any
  - `edges`: array
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
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array

## Process getProcessDiagram
Represents call to:
`GET /{organizationKey}/processes/{processId}/diagram`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `canvas`: any
- `edges`: array
- `version`: number

## Process updateProcessDiagram
Represents call to:
`PUT /{organizationKey}/processes/{processId}/diagram`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `body`: required object [Diagram](#process-diagram)
  - `id`: string
  - `canvas`: any
  - `edges`: array
  - `version`: number
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `canvas`: any
- `edges`: array
- `version`: number

## Process getProcessExport
Represents call to:
`GET /{organizationKey}/processes/{processId}/export`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `callback`: required func - function(err, resp, body)

## Process getProcessExportJson
Represents call to:
`GET /{organizationKey}/processes/{processId}/export/json`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `activities`: array
- `activitiesOrder`: array
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array
- `processId`: string
- `transitions`: array
- `variables`: array
- `category`: string
- `caseColumnsOrder`: array
- `changed`: boolean
- `diagram`: object
  - `id`: string
  - `canvas`: any
  - `edges`: array
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
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array

## Process getProcessTransitions
Represents call to:
`GET /{organizationKey}/processes/{processId}/transitions`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `callback`: required func - function(err, resp, body)

## Process createProcessTransitions
Represents call to:
`POST /{organizationKey}/processes/{processId}/transitions`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `body`: required object [Transition](#process-transition)
  - `id`: string
  - `bpmnId`: string
  - `button`: string
  - `condition`: string
  - `conditionExpression`: string
  - `di`: object
  - `from`: object
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
  - `fromId`: string
  - `name`: string
  - `organizationId`: string
  - `parentId`: string
  - `processId`: string
  - `to`: object
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
  - `toId`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `bpmnId`: string
- `button`: string
- `condition`: string
- `conditionExpression`: string
- `di`: object
- `from`: object
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
- `fromId`: string
- `name`: string
- `organizationId`: string
- `parentId`: string
- `processId`: string
- `to`: object
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
- `toId`: string

## Process deleteProcessTransition
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/transitions/{transitionId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `transitionId`: required string
- `callback`: required func - function(err, resp, body)

## Process getProcessTransition
Represents call to:
`GET /{organizationKey}/processes/{processId}/transitions/{transitionId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `transitionId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `bpmnId`: string
- `button`: string
- `condition`: string
- `conditionExpression`: string
- `di`: object
- `from`: object
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
- `fromId`: string
- `name`: string
- `organizationId`: string
- `parentId`: string
- `processId`: string
- `to`: object
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
- `toId`: string

## Process updateProcessTransition
Represents call to:
`PUT /{organizationKey}/processes/{processId}/transitions/{transitionId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `transitionId`: required string
- `body`: required object [Transition](#process-transition)
  - `id`: string
  - `bpmnId`: string
  - `button`: string
  - `condition`: string
  - `conditionExpression`: string
  - `di`: object
  - `from`: object
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
  - `fromId`: string
  - `name`: string
  - `organizationId`: string
  - `parentId`: string
  - `processId`: string
  - `to`: object
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
  - `toId`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `bpmnId`: string
- `button`: string
- `condition`: string
- `conditionExpression`: string
- `di`: object
- `from`: object
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
- `fromId`: string
- `name`: string
- `organizationId`: string
- `parentId`: string
- `processId`: string
- `to`: object
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
- `toId`: string

## Process deleteProcessTrigger
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/trigger`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `callback`: required func - function(err, resp, body)

## Process getProcessTrigger
Represents call to:
`GET /{organizationKey}/processes/{processId}/trigger`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `activities`: array
- `activitiesOrder`: array
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array
- `processId`: string
- `transitions`: array
- `variables`: array

## Process updateProcessTrigger
Represents call to:
`PUT /{organizationKey}/processes/{processId}/trigger`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `body`: required object [Trigger](#process-trigger)
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `activities`: array
- `activitiesOrder`: array
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array
- `processId`: string
- `transitions`: array
- `variables`: array

## Process getProcessTriggerForm
Represents call to:
`GET /{organizationKey}/processes/{processId}/trigger/form`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `versionId`: required string
- `activityId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `activityId`: string
- `button`: string
- `buttons`: array
- `description`: string
- `fields`: array
- `fieldsOrder`: array
- `organizationId`: string
- `processId`: string

## Process updateProcessTriggerForm
Represents call to:
`PUT /{organizationKey}/processes/{processId}/trigger/form`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `body`: required object [Form](#process-form)
  - `id`: string
  - `activityId`: string
  - `button`: string
  - `buttons`: array
  - `description`: string
  - `fields`: array
  - `fieldsOrder`: array
  - `organizationId`: string
  - `processId`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `activityId`: string
- `button`: string
- `buttons`: array
- `description`: string
- `fields`: array
- `fieldsOrder`: array
- `organizationId`: string
- `processId`: string

## Process getProcessTriggerFormFields
Represents call to:
`GET /{organizationKey}/processes/{processId}/trigger/form/fields`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `versionId`: required string
- `activityId`: required string
- `callback`: required func - function(err, resp, body)

## Process createProcessTriggerFormFields
Represents call to:
`POST /{organizationKey}/processes/{processId}/trigger/form/fields`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `body`: required object [NewFormField](#process-newformfield)
  - `id`: string
  - `key`: string
  - `name`: string
  - `readOnly`: boolean
  - `required`: boolean
  - `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `key`: string
- `name`: string
- `readOnly`: boolean
- `required`: boolean
- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string

## Process deleteProcessTriggerFormField
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/trigger/form/fields/{fieldId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `fieldId`: required string
- `callback`: required func - function(err, resp, body)

## Process getProcessTriggerFormField
Represents call to:
`GET /{organizationKey}/processes/{processId}/trigger/form/fields/{fieldId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `fieldId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
- `id`: string
- `key`: string
- `name`: string
- `readOnly`: boolean
- `required`: boolean
- `type`: object
- `value`: any

## Process updateProcessTriggerFormField
Represents call to:
`PUT /{organizationKey}/processes/{processId}/trigger/form/fields/{fieldId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `fieldId`: required string
- `body`: required object [FormField](#process-formfield)
  - `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
  - `id`: string
  - `key`: string
  - `name`: string
  - `readOnly`: boolean
  - `required`: boolean
  - `type`: object
  - `value`: any
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `binding`: object
  - `id`: string
  - `converter`: string
  - `fields`: array
  - `variableId`: string
- `id`: string
- `key`: string
- `name`: string
- `readOnly`: boolean
- `required`: boolean
- `type`: object
- `value`: any

## Process getProcessTriggerParameters
Represents call to:
`GET /{organizationKey}/processes/{processId}/trigger/parameters`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `activityId`: required string
- `callback`: required func - function(err, resp, body)

## Process getProcessVariables
Represents call to:
`GET /{organizationKey}/processes/{processId}/variables/{variableId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `variableId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `bpmnId`: string
- `defaultValue`: any
- `name`: string
- `organizationId`: string
- `parentId`: string
- `processId`: string
- `type`: object

## Process createProcessVariables
Represents call to:
`POST /{organizationKey}/processes/{processId}/variables`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `body`: required object [Variable](#process-variable)
  - `id`: string
  - `bpmnId`: string
  - `defaultValue`: any
  - `name`: string
  - `organizationId`: string
  - `parentId`: string
  - `processId`: string
  - `type`: object
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `bpmnId`: string
- `defaultValue`: any
- `name`: string
- `organizationId`: string
- `parentId`: string
- `processId`: string
- `type`: object

## Process deleteProcessVariables
Represents call to:
`DELETE /{organizationKey}/processes/{processId}/variables/{variableId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `variableId`: required string
- `callback`: required func - function(err, resp, body)

## Process updateProcessVariables
Represents call to:
`PUT /{organizationKey}/processes/{processId}/variables/{variableId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `variableId`: required string
- `body`: required object [Variable](#process-variable)
  - `id`: string
  - `bpmnId`: string
  - `defaultValue`: any
  - `name`: string
  - `organizationId`: string
  - `parentId`: string
  - `processId`: string
  - `type`: object
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `bpmnId`: string
- `defaultValue`: any
- `name`: string
- `organizationId`: string
- `parentId`: string
- `processId`: string
- `type`: object

## Process updateProcessVariablesType
Represents call to:
`PUT /{organizationKey}/processes/{processId}/variables/{variableId}/type`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `variableId`: required string
- `body`: required object [Type](#process-type)
- `callback`: required func - function(err, resp, body)

*Callback body:*


## Process getProcessVersions
Represents call to:
`GET /{organizationKey}/processes/{processId}/versions`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `callback`: required func - function(err, resp, body)

## Process createProcessVersions
Represents call to:
`POST /{organizationKey}/processes/{processId}/versions`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `activities`: array
- `activitiesOrder`: array
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array
- `processId`: string
- `transitions`: array
- `variables`: array
- `created`: date
- `diagram`: object
  - `id`: string
  - `canvas`: any
  - `edges`: array
  - `version`: number
- `ownerId`: string
- `publisherId`: string
- `sandbox`: boolean
- `trigger`: object
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array

## Process createProcessVersionPublish
Represents call to:
`POST /{organizationKey}/processes/{processId}/versions/{versionId}/publish`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `versionId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `activities`: array
- `activitiesOrder`: array
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array
- `processId`: string
- `transitions`: array
- `variables`: array
- `created`: date
- `diagram`: object
  - `id`: string
  - `canvas`: any
  - `edges`: array
  - `version`: number
- `ownerId`: string
- `publisherId`: string
- `sandbox`: boolean
- `trigger`: object
  - `id`: string
  - `access`: any
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array

## Process createProcessVersionRestore
Represents call to:
`POST /{organizationKey}/processes/{processId}/versions/{versionId}/restore`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `versionId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `activities`: array
- `activitiesOrder`: array
- `bpmnId`: string
- `defaultTransitionId`: string
- `description`: string
- `di`: object
- `name`: string
- `nameTemplate`: string
- `organizationId`: string
- `parentId`: string
- `parameters`: array
- `processId`: string
- `transitions`: array
- `variables`: array
- `category`: string
- `caseColumnsOrder`: array
- `changed`: boolean
- `diagram`: object
  - `id`: string
  - `canvas`: any
  - `edges`: array
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
  - `activities`: array
  - `activitiesOrder`: array
  - `bpmnId`: string
  - `defaultTransitionId`: string
  - `description`: string
  - `di`: object
  - `name`: string
  - `nameTemplate`: string
  - `organizationId`: string
  - `parentId`: string
  - `parameters`: array
  - `processId`: string
  - `transitions`: array
  - `variables`: array

## Process getProcessVersionTriggerForm
Represents call to:
`GET /{organizationKey}/processes/{processId}/versions/{versionId}/trigger/form`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `versionId`: required string
- `activityId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `activityId`: string
- `button`: string
- `buttons`: array
- `description`: string
- `fields`: array
- `fieldsOrder`: array
- `organizationId`: string
- `processId`: string

## Process getProcessVersionTriggerFormFields
Represents call to:
`GET /{organizationKey}/processes/{processId}/versions/{versionId}/trigger/form/fields`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `versionId`: required string
- `activityId`: required string
- `callback`: required func - function(err, resp, body)

## Process getTemplates
Represents call to:
`GET /{organizationKey}/templates`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `category`: string
- `callback`: required func - function(err, resp, body)

# Service

## Service getUserInstance

## Service onUnauthorized

## Service applyDefaults

## Service getOauth_callback
Represents call to:
`GET /oauth_callback`

*Arguments:*

- `state`: string
- `code`: string
- `error`: string
- `callback`: required func - function(err, resp, body)

## Service getServicesAccounts
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/accounts/{accountId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `serviceKey`: required string
- `accountId`: required string
- `excludeOwner`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `restricted`: boolean
- `serviceKey`: string
- `userId`: string

## Service createServicesAccounts
Represents call to:
`POST /{organizationKey}/services/{serviceKey}/accounts`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `serviceKey`: required string
- `body`: required object [Account](#service-account)
  - `id`: string
  - `access`: any
  - `restricted`: boolean
  - `serviceKey`: string
  - `userId`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `restricted`: boolean
- `serviceKey`: string
- `userId`: string

## Service updateServicesAccounts
Represents call to:
`PUT /{organizationKey}/services/{serviceKey}/accounts/{accountId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `serviceKey`: required string
- `accountId`: required string
- `body`: required object [Account](#service-account)
  - `id`: string
  - `access`: any
  - `restricted`: boolean
  - `serviceKey`: string
  - `userId`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `id`: string
- `access`: any
- `restricted`: boolean
- `serviceKey`: string
- `userId`: string

## Service getServicesAccountsOptions
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/accounts/{accountId}/options/{optionsKey}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `serviceKey`: required string
- `accountId`: required string
- `optionsKey`: required string
- `excludeOwner`: string
- `callback`: required func - function(err, resp, body)

## Service getServicesAccountsReferences
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/accounts/{accountId}/references`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `serviceKey`: required string
- `accountId`: required string
- `q`: string
- `parent`: string
- `pathTo`: string
- `excludeOwner`: string
- `callback`: required func - function(err, resp, body)

## Service getServicesOptions
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/options/{optionsKey}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `serviceKey`: required string
- `accountId`: required string
- `optionsKey`: required string
- `excludeOwner`: string
- `callback`: required func - function(err, resp, body)

## Service getServices
Represents call to:
`GET /{organizationKey}/services`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `callback`: required func - function(err, resp, body)

## Service createServicesOauthStart
Represents call to:
`POST /{organizationKey}/services/oauth/start`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `body`: required object [OauthStartRequest](#service-oauthstartrequest)
  - `path`: string
  - `serviceKey`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `authorizationUrl`: string

## Service createServicesActionInstancesLock
Represents call to:
`POST /{organizationKey}/services/{serviceKey}/actionInstances/lock`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `serviceKey`: required string
- `body`: required object [ActionInstance](#service-actioninstance)
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
- `callback`: required func - function(err, resp, body)

*Callback body:*

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

## Service createServicesActionInstancesEnd
Represents call to:
`POST /{organizationKey}/services/{serviceKey}/actionInstances/{actionInstanceId}/end`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `serviceKey`: required string
- `actionInstanceId`: required string
- `body`: required object [ActionInstanceEnd](#service-actioninstanceend)
  - `parameters`: object
- `callback`: required func - function(err, resp, body)

*Callback body:*


## Service getServicesIcon
Represents call to:
`GET /{organizationKey}/services/{serviceKey}/icon`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `serviceKey`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `inputStream`: any
- `contentType`: string
- `contentDispositionInlineFileName`: string
- `cacheControlMaxAgeInMillis`: number

# Search

## Search getUserInstance

## Search onUnauthorized

## Search applyDefaults

## Search getSearch
Represents call to:
`GET /{organizationKey}/search`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `query`: string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `tasks`: array
- `processes`: array

# File

## File getUserInstance

## File onUnauthorized

## File applyDefaults

## File createFiles
Represents call to:
`POST /{organizationKey}/files`

*Arguments:*

- `organizationKey`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

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

## File deleteFiles
Represents call to:
`DELETE /{organizationKey}/files/{fileId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `fileId`: required string
- `callback`: required func - function(err, resp, body)

## File getFiles
Represents call to:
`GET /{organizationKey}/files/{fileId}`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `fileId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

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

## File getFilesStream
Represents call to:
`GET /{organizationKey}/files/{fileId}/stream`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `fileId`: required string
- `callback`: required func - function(err, resp, body)

*Callback body:*

- `inputStream`: any
- `contentType`: string
- `contentDispositionInlineFileName`: string
- `cacheControlMaxAgeInMillis`: number

## File createFilesiframe
Represents call to:
`POST /{organizationKey}/filesiframe`

*Arguments:*

- `organizationKey`: required string
- `callback`: required func - function(err, resp, body)

# ProcessInstance

## ProcessInstance getUserInstance

## ProcessInstance onUnauthorized

## ProcessInstance applyDefaults

## ProcessInstance getProcessInstancesVariables
Represents call to:
`GET /{organizationKey}/processes/{processId}/instances/{processInstanceId}/variables`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `processInstanceId`: required string
- `callback`: required func - function(err, resp, body)

## ProcessInstance updateProcessInstancesVariables
Represents call to:
`PUT /{organizationKey}/processes/{processId}/instances/{processInstanceId}/variables`
> Requires authorization

*Arguments:*

- `organizationKey`: required string
- `processId`: required string
- `processInstanceId`: required string
- `body`: required object [List](#processinstance-list)
- `callback`: required func - function(err, resp, body)
