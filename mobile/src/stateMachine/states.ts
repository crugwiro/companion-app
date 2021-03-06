
// NOTE Order makes a difference: latter one has more priority
// if on the same frame two states will compete
// (enter condition of both will be satisfied)

// a-la routes
export enum States {
    Undefined = 0,

    // Start Block
    Start = 1,

    // Sign In Block
    Welcome,
    SignInWithEmail,
    SignInPassword,

    // Main Block
    SetPassword,
    ConfirmAccount,
    NoAccount,

    MissingAccount,

    HomeRouter,
    NotificationsRouter,

    Consent,

    IntakeForm,
    Home,
    JournalDetail,

    OnboardingEnter,
    AskNotificationsPermissions,

    // Create Journal Block
    Journal_SelectMood,
    Journal_Feelings,
    Journal_Location,
    Journal_SelectType,
    Journal_TextRecord,
    Journal_AudioRecord,
    Journal_PictureRecord,

    Journal_AfterSubmitRouter,

    NewRewardsView,
    OnboardingExit,

    // Settings block
    Goals,
    Profile,
    Settings,
    EmailSettings,
    ChangePassword,
    NotificationsSettings,
}
